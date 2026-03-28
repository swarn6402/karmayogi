const DEFAULT_BLOCKED_SITES = [
  "instagram.com",
  "x.com",
  "twitter.com",
  "facebook.com",
  "reddit.com",
  "youtube.com",
  "tiktok.com",
  "snapchat.com",
  "linkedin.com",
  "pinterest.com",
  "tumblr.com"
];

const BLOCKED_PAGE_PATH = "blocked.html";
const SECOND_LEVEL_TLDS = new Set([
  "co.uk",
  "org.uk",
  "gov.uk",
  "ac.uk",
  "co.in",
  "org.in",
  "gov.in",
  "co.jp",
  "com.au",
  "net.au",
  "org.au"
]);

function getSync(keys) {
  return chrome.storage.sync.get(keys);
}

function getLocal(keys) {
  return chrome.storage.local.get(keys);
}

function getTodayString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function incrementDailyRedirectCount() {
  const today = getTodayString();
  const { daily_count: dailyCount = 0, daily_count_date: dailyCountDate = "" } =
    await getLocal(["daily_count", "daily_count_date"]);

  const nextCount = dailyCountDate === today ? Number(dailyCount || 0) + 1 : 1;

  await chrome.storage.local.set({
    daily_count: nextCount,
    daily_count_date: today
  });
}

function normalizeHostname(input) {
  if (!input) {
    return "";
  }

  let rawValue = input.trim();

  if (isRestrictedScheme(rawValue)) {
    return "";
  }

  rawValue = rawValue
    .replace(/^[a-z]+:\/\//i, "")
    .replace(/^www\./i, "")
    .split("/")[0]
    .split("?")[0]
    .split("#")[0];

  let hostname = rawValue;

  try {
    hostname = new URL(`https://${rawValue}`).hostname;
  } catch (error) {
    hostname = rawValue;
  }

  return hostname.replace(/^www\./i, "").toLowerCase();
}

function extractRootHostname(input) {
  const hostname = normalizeHostname(input);

  if (!hostname) {
    return "";
  }

  const parts = hostname.split(".").filter(Boolean);

  if (parts.length <= 2) {
    return hostname;
  }

  const tail = parts.slice(-2).join(".");
  const extendedTail = parts.slice(-3).join(".");

  if (SECOND_LEVEL_TLDS.has(tail)) {
    return extendedTail;
  }

  return tail;
}

function isRestrictedScheme(url) {
  return (
    url.startsWith("chrome://") ||
    url.startsWith("chrome-extension://") ||
    url.startsWith("about:") ||
    url === "newtab" ||
    url.startsWith("newtab")
  );
}

function isBlockedHostname(hostname, blockedSites) {
  return blockedSites.some((entry) => {
    const blockedHost = extractRootHostname(entry);
    return hostname === blockedHost;
  });
}

chrome.runtime.onInstalled.addListener(async () => {
  try {
    await chrome.storage.sync.set({
      focusMode: true,
      blockedSites: DEFAULT_BLOCKED_SITES
    });
  } catch (error) {
    console.warn("Unable to initialize default KarmaYogi settings.", error);
  }
});

chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  try {
    if (details.frameId !== 0 || details.tabId < 0) {
      return;
    }

    const { url, tabId } = details;

    if (!url || isRestrictedScheme(url)) {
      return;
    }

    const hostname = extractRootHostname(url);

    if (!hostname) {
      return;
    }

    const { focusMode, blockedSites = DEFAULT_BLOCKED_SITES } = await getSync([
      "focusMode",
      "blockedSites"
    ]);

    if (focusMode !== true) {
      return;
    }

    if (!isBlockedHostname(hostname, blockedSites)) {
      return;
    }

    const graceKey = `grace_${hostname}`;
    const localState = await getLocal(graceKey);
    const graceUntil = Number(localState[graceKey] || 0);

    if (graceUntil > Date.now()) {
      return;
    }

    const targetUrl =
      chrome.runtime.getURL(BLOCKED_PAGE_PATH) +
      `?site=${encodeURIComponent(hostname)}`;

    await incrementDailyRedirectCount();
    await chrome.tabs.update(tabId, { url: targetUrl });
  } catch (error) {
    console.warn("Unable to process KarmaYogi redirect.", error);
  }
});
