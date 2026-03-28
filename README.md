# KarmaYogi
> Stay focused. Your karma awaits.

KarmaYogi is a Manifest V3 Chrome extension that blocks distracting sites and redirects you to a calm Bhagavad Gita reflection page instead of the site you were about to open. It combines a focus toggle, editable blocklist, and a grace-period escape hatch with a sacred, temple-inspired UI.

## Installation
1. Open `chrome://extensions`.
2. Turn on `Developer mode`.
3. Click `Load unpacked`.
4. Select this project folder: `d:\karmayogi`.

## Incognito
1. Open `chrome://extensions`.
2. Find `KarmaYogi`.
3. Click `Details`.
4. Turn on `Allow in Incognito` if you want blocking there too.

## Using the Popup
- Open the extension popup and use the `Focus Mode` toggle to enable or pause blocking.
- Remove a blocked site by clicking the `×` on its pill.
- Add a new site by typing a domain like `notion.so` and pressing `Enter` or clicking `+`.

## Adding More Gita Quotes
- Open [quotes.js](/d:/karmayogi/quotes.js).
- Add a new object to `GITA_QUOTES` using this shape:

```js
{
  verse: "6.35",
  sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम्...",
  transliteration: "asaṁśayaṁ mahābāho mano durnigrahaṁ calam...",
  translation: "Without doubt, the mind is restless and difficult to restrain...",
  context: "A reminder that training attention takes practice and detachment"
}
```

- Keep every field populated and keep `verse` in `Chapter.Verse` format.

## File Structure
- [manifest.json](/d:/karmayogi/manifest.json): Extension manifest, permissions, popup, service worker, and web-accessible resources.
- [background.js](/d:/karmayogi/background.js): Main navigation blocking logic, focus-mode checks, and grace-period redirect handling.
- [blocked.html](/d:/karmayogi/blocked.html): Sacred full-page redirect experience shown when a blocked site is opened.
- [blocked.css](/d:/karmayogi/blocked.css): Mandala background, layout, animation, and temple-inspired styling for the blocked page.
- [blocked.js](/d:/karmayogi/blocked.js): Populates hostname and quote content, handles return and 5-minute grace actions.
- [popup.html](/d:/karmayogi/popup.html): Popup UI for focus mode and blocklist management.
- [popup.css](/d:/karmayogi/popup.css): Popup layout, toggle styling, pill styling, and scrollbar polish.
- [popup.js](/d:/karmayogi/popup.js): Reads and writes `focusMode` and `blockedSites` through `chrome.storage.sync`.
- [theme.css](/d:/karmayogi/theme.css): Shared color variables and Google Font imports used by popup and blocked page.
- [quotes.js](/d:/karmayogi/quotes.js): Bhagavad Gita quote dataset and `getRandomQuote()` helper.
- [icons/icon16.png](/d:/karmayogi/icons/icon16.png): 16px toolbar icon.
- [icons/icon48.png](/d:/karmayogi/icons/icon48.png): 48px extension management icon.
- [icons/icon128.png](/d:/karmayogi/icons/icon128.png): 128px store-style icon.

## Credits
- Bhagavad Gita verse text and source mapping: Vedic Scriptures Bhagavad Gita dataset.
- Fonts: `Noto Serif Devanagari`, `Cinzel`, and `EB Garamond` via Google Fonts.
