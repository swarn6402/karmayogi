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

const GRACE_WINDOW_MS = 5 * 60 * 1000;
const BLOCKED_PAGE_PATH = "blocked.html";

function getSync(keys) {
  return chrome.storage.sync.get(keys);
}

function getLocal(keys) {
  return chrome.storage.local.get(keys);
}

function normalizeHostname(input) {
  if (!input) {
    return "";
  }

  let hostname = input;

  try {
    hostname = new URL(input).hostname;
  } catch (error) {
    hostname = input;
  }

  return hostname.replace(/^www\./i, "").toLowerCase();
}

function isRestrictedScheme(url) {
  return (
    url.startsWith("chrome://") ||
    url.startsWith("chrome-extension://") ||
    url.startsWith("about:")
  );
}

function isBlockedHostname(hostname, blockedSites) {
  return blockedSites.some((entry) => {
    const blockedHost = normalizeHostname(entry);
    return hostname === blockedHost || hostname.endsWith(`.${blockedHost}`);
  });
}

function isGraceActive(value) {
  const numericValue = Number(value || 0);

  if (!numericValue) {
    return false;
  }

  if (numericValue > Date.now()) {
    return true;
  }

  return Date.now() - numericValue < GRACE_WINDOW_MS;
}

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.sync.set({
    focusMode: true,
    blockedSites: DEFAULT_BLOCKED_SITES
  });
});

chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
  if (details.frameId !== 0 || details.tabId < 0) {
    return;
  }

  const { url, tabId } = details;

  if (!url || isRestrictedScheme(url)) {
    return;
  }

  const hostname = normalizeHostname(url);

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

  if (isGraceActive(localState[graceKey])) {
    return;
  }

  const targetUrl =
    chrome.runtime.getURL(BLOCKED_PAGE_PATH) +
    `?site=${encodeURIComponent(hostname)}`;

  await chrome.tabs.update(tabId, { url: targetUrl });
});
