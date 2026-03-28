const params = new URLSearchParams(window.location.search);
const blockedSite = params.get("site") || "Unknown site";

const blockedSiteEl = document.getElementById("blocked-site");
const quoteTextEl = document.getElementById("quote-text");
const quoteSourceEl = document.getElementById("quote-source");

if (blockedSiteEl) {
  blockedSiteEl.textContent = blockedSite;
}

if (Array.isArray(window.GITA_QUOTES) && window.GITA_QUOTES.length > 0) {
  const quote = window.GITA_QUOTES[Math.floor(Math.random() * window.GITA_QUOTES.length)];

  if (quoteTextEl) {
    quoteTextEl.textContent = quote.text;
  }

  if (quoteSourceEl) {
    quoteSourceEl.textContent = quote.source;
  }
}
