const FIVE_MINUTES_MS = 300000;

const blockedSiteEl = document.getElementById("blocked-site");
const sanskritEl = document.getElementById("sanskrit");
const transliterationEl = document.getElementById("transliteration");
const translationEl = document.getElementById("translation");
const verseRefEl = document.getElementById("verse-ref");
const contextEl = document.getElementById("context");
const intentionPanelEl = document.getElementById("intention-panel");
const intentionTextEl = document.getElementById("intention-text");
const dailyCountEl = document.getElementById("daily-count");
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

async function getDailyRedirectCount() {
  if (
    typeof chrome === "undefined" ||
    !chrome.storage ||
    !chrome.storage.local ||
    typeof chrome.storage.local.get !== "function"
  ) {
    return 0;
  }

  const { daily_count: dailyCount = 0 } = await chrome.storage.local.get("daily_count");
  return Number(dailyCount || 0);
}

async function getFocusIntention() {
  if (
    typeof chrome === "undefined" ||
    !chrome.storage ||
    !chrome.storage.sync ||
    typeof chrome.storage.sync.get !== "function"
  ) {
    return "";
  }

  const { focusIntention = "" } = await chrome.storage.sync.get("focusIntention");
  return typeof focusIntention === "string" ? focusIntention.trim() : "";
}

function renderFocusIntention(intention) {
  if (!intentionPanelEl || !intentionTextEl) {
    return;
  }

  if (!intention) {
    intentionPanelEl.classList.add("is-hidden");
    return;
  }

  intentionTextEl.textContent = intention;
  intentionPanelEl.classList.remove("is-hidden");
}

function renderDailyRedirectCount(count) {
  if (!dailyCountEl) {
    return;
  }

  dailyCountEl.textContent = `You have been redirected ${count} times today`;
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

function playTempleBell() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      return;
    }

    const audioContext = new AudioContextClass();
    const now = audioContext.currentTime;
    const masterGain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const delay = audioContext.createDelay();
    const feedback = audioContext.createGain();

    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(0.18, now + 0.01);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 5);

    filter.type = "lowpass";
    filter.frequency.value = 800;

    delay.delayTime.setValueAtTime(0.08, now);
    feedback.gain.setValueAtTime(0.15, now);

    delay.connect(feedback);
    feedback.connect(delay);

    masterGain.connect(delay);
    masterGain.connect(audioContext.destination);
    delay.connect(audioContext.destination);
    filter.connect(masterGain);

    [528, 396].forEach((frequency) => {
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, now);
      oscillator.connect(filter);
      oscillator.start(now);
      oscillator.stop(now + 5.1);
      oscillator.addEventListener("ended", () => {
        if (audioContext.state !== "closed") {
          audioContext.close().catch(() => {});
        }
      }, { once: true });
    });
  } catch (error) {
    // Audio is intentionally optional on the blocked page.
  }
}

async function hydratePage() {
  try {
    const [dailyCount, focusIntention] = await Promise.all([
      getDailyRedirectCount(),
      getFocusIntention()
    ]);

    renderDailyRedirectCount(dailyCount);
    renderFocusIntention(focusIntention);
  } catch (error) {
    console.warn("Unable to hydrate blocked page metadata.", error);
  }
}

const hostname = parseHostname();

if (blockedSiteEl) {
  blockedSiteEl.textContent = hostname;
}

populateQuote(pickQuote());
hydratePage();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    returnToWork();
  }
});

window.setTimeout(() => {
  playTempleBell();
}, 800);

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
