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

const state = {
  focusMode: true,
  blockedSites: [...DEFAULT_BLOCKED_SITES]
};

const focusToggle = document.getElementById("focus-toggle");
const focusStatus = document.getElementById("focus-status");
const blockedSitesContainer = document.getElementById("blocked-sites");
const siteInput = document.getElementById("site-input");
const addSiteButton = document.getElementById("add-site-button");
const inputFeedback = document.getElementById("input-feedback");

function hasChromeStorage() {
  return (
    typeof chrome !== "undefined" &&
    chrome.storage &&
    chrome.storage.sync &&
    typeof chrome.storage.sync.get === "function" &&
    typeof chrome.storage.sync.set === "function"
  );
}

async function loadState() {
  if (!hasChromeStorage()) {
    render();
    return;
  }

  const stored = await chrome.storage.sync.get(["focusMode", "blockedSites"]);

  state.focusMode =
    typeof stored.focusMode === "boolean" ? stored.focusMode : true;

  state.blockedSites = Array.isArray(stored.blockedSites)
    ? stored.blockedSites
    : [...DEFAULT_BLOCKED_SITES];

  render();
}

async function saveState() {
  if (!hasChromeStorage()) {
    return;
  }

  await chrome.storage.sync.set({
    focusMode: state.focusMode,
    blockedSites: state.blockedSites
  });
}

function setFeedback(message, tone = "") {
  if (!inputFeedback) {
    return;
  }

  inputFeedback.textContent = message;
  inputFeedback.className = "input-feedback";

  if (tone) {
    inputFeedback.classList.add(`input-feedback--${tone}`);
  }
}

function normalizeHostname(rawValue) {
  if (!rawValue) {
    return "";
  }

  const cleaned = rawValue
    .trim()
    .toLowerCase()
    .replace(/^[a-z]+:\/\//i, "")
    .replace(/^www\./i, "");

  const candidate = cleaned.includes("://") ? cleaned : `https://${cleaned}`;

  try {
    return new URL(candidate).hostname.replace(/^www\./i, "");
  } catch (error) {
    return cleaned.split("/")[0].split("?")[0].split("#")[0].replace(/^www\./i, "");
  }
}

function renderFocusMode() {
  if (focusToggle) {
    focusToggle.checked = state.focusMode;
  }

  if (focusStatus) {
    focusStatus.className = "focus-status";

    if (state.focusMode) {
      focusStatus.classList.add("focus-status--on");
      focusStatus.textContent = "Active \u2014 your focus is protected";
    } else {
      focusStatus.classList.add("focus-status--off");
      focusStatus.textContent = "Paused \u2014 sites are unblocked";
    }
  }
}

function renderBlockedSites() {
  if (!blockedSitesContainer) {
    return;
  }

  blockedSitesContainer.innerHTML = "";

  if (state.blockedSites.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "No sites blocked yet.";
    blockedSitesContainer.appendChild(emptyState);
    return;
  }

  state.blockedSites.forEach((site) => {
    const pill = document.createElement("div");
    pill.className = "site-pill";

    const label = document.createElement("span");
    label.className = "site-pill-label";
    label.textContent = site;

    const removeButton = document.createElement("button");
    removeButton.className = "site-pill-remove";
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `Remove ${site}`);
    removeButton.innerHTML = "&#10005;";
    removeButton.addEventListener("click", async () => {
      state.blockedSites = state.blockedSites.filter((entry) => entry !== site);
      await saveState();
      renderBlockedSites();
      setFeedback(`${site} removed.`, "success");
    });

    pill.append(label, removeButton);
    blockedSitesContainer.appendChild(pill);
  });
}

function render() {
  renderFocusMode();
  renderBlockedSites();
}

async function handleFocusToggle() {
  state.focusMode = Boolean(focusToggle && focusToggle.checked);
  renderFocusMode();
  await saveState();
}

async function handleAddSite() {
  const normalized = normalizeHostname(siteInput ? siteInput.value : "");

  if (!normalized || !normalized.includes(".")) {
    setFeedback("Enter a valid domain like notion.so", "error");
    return;
  }

  if (state.blockedSites.includes(normalized)) {
    setFeedback(`${normalized} is already blocked.`, "error");
    return;
  }

  state.blockedSites = [...state.blockedSites, normalized];
  await saveState();
  renderBlockedSites();

  if (siteInput) {
    siteInput.value = "";
  }

  setFeedback(`${normalized} added to your blocked list.`, "success");
}

if (focusToggle) {
  focusToggle.addEventListener("change", async () => {
    try {
      await handleFocusToggle();
    } catch (error) {
      console.warn("Unable to update focus mode.", error);
    }
  });
}

if (addSiteButton) {
  addSiteButton.addEventListener("click", async () => {
    try {
      await handleAddSite();
    } catch (error) {
      console.warn("Unable to add blocked site.", error);
      setFeedback("Unable to add that site right now.", "error");
    }
  });
}

if (siteInput) {
  siteInput.addEventListener("keydown", async (event) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();

    try {
      await handleAddSite();
    } catch (error) {
      console.warn("Unable to add blocked site.", error);
      setFeedback("Unable to add that site right now.", "error");
    }
  });

  siteInput.addEventListener("input", () => {
    setFeedback("");
  });
}

loadState().catch((error) => {
  console.warn("Unable to load popup state.", error);
  render();
});
