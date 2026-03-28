const FIVE_MINUTES_MS = 300000;

const blockedSiteEl = document.getElementById("blocked-site");
const sanskritEl = document.getElementById("sanskrit");
const transliterationEl = document.getElementById("transliteration");
const translationEl = document.getElementById("translation");
const verseRefEl = document.getElementById("verse-ref");
const contextEl = document.getElementById("context");
const returnButton = document.getElementById("return-button");
const graceButton = document.getElementById("grace-button");

function parseHostname() {
  const params = new URLSearchParams(window.location.search);
  const rawSite = params.get("site");

  if (!rawSite) {
    return "Unknown site";
  }

  try {
    return decodeURIComponent(rawSite);
  } catch (error) {
    return rawSite;
  }
}

function pickQuote() {
  if (typeof getRandomQuote === "function") {
    return getRandomQuote();
  }

  if (Array.isArray(window.GITA_QUOTES) && window.GITA_QUOTES.length > 0) {
    return window.GITA_QUOTES[0];
  }

  return null;
}

function populateQuote(quote) {
  if (!quote) {
    return;
  }

  if (sanskritEl) {
    sanskritEl.textContent = quote.sanskrit || "";
  }

  if (transliterationEl) {
    transliterationEl.textContent = quote.transliteration || "";
  }

  if (translationEl) {
    translationEl.textContent = quote.translation || "";
  }

  if (verseRefEl) {
    verseRefEl.textContent = `Bhagavad Gita \u00B7 ${quote.verse || ""}`;
  }

  if (contextEl) {
    contextEl.textContent = quote.context || "";
  }
}

function returnToWork() {
  if (window.history.length > 1) {
    window.history.back();
    return;
  }

  window.close();
}

async function grantGrace(hostname) {
  if (
    typeof chrome === "undefined" ||
    !chrome.storage ||
    !chrome.storage.local ||
    typeof chrome.storage.local.set !== "function"
  ) {
    return;
  }

  const graceKey = `grace_${hostname}`;
  await chrome.storage.local.set({
    [graceKey]: Date.now() + FIVE_MINUTES_MS
  });
}

const hostname = parseHostname();

if (blockedSiteEl) {
  blockedSiteEl.textContent = hostname;
}

populateQuote(pickQuote());

if (returnButton) {
  returnButton.addEventListener("click", () => {
    returnToWork();
  });
}

if (graceButton) {
  graceButton.addEventListener("click", async () => {
    try {
      await grantGrace(hostname);
    } catch (error) {
      console.warn("Unable to store grace period.", error);
    }

    returnToWork();
  });
}
