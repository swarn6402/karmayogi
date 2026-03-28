# 🪷 KarmaYogi

> *"You have a right to perform your duties, but not to the fruits of your actions."*
> — Bhagavad Gita, 2.47

**KarmaYogi** is a Chrome extension that blocks distracting websites and replaces them with a moment of stillness — a Bhagavad Gita verse on Karma Yoga, your stated intention, and a soft temple bell. Not punishment. A pause.

---

## ✨ Features

- **Site Blocking** — blocks any site you choose the moment you navigate to it
- **Gita Quote Page** — every redirect shows a random Sanskrit shloka with transliteration, English translation, verse reference, and context
- **Focus Intention** — set what you're working on; it appears on every blocked page as a reminder
- **Daily Redirect Count** — see how many times you've been redirected today
- **5-Minute Grace Period** — need a site genuinely? Take 5 minutes, then blocking resumes
- **Temple Bell Sound** — a single soft synthesized ghanti strike on every redirect, using the Web Audio API
- **Escape Key Support** — press `Esc` to return to work instantly
- **Focus Mode Toggle** — pause all blocking from the popup when needed
- **Incognito Support** — works in incognito with one manual step (see below)

---

## 📸 Preview

| Blocked Page | Popup Settings |
|---|---|
| Sanskrit verse, your intention, redirect count | Site management, focus toggle, intention input |

---

## 🚀 Installation

KarmaYogi is not yet on the Chrome Web Store. Install it manually in under a minute:

**1. Download the extension**

```bash
git clone https://github.com/swarn6402/karmayogi.git
```

Or download the ZIP from GitHub and extract it.

**2. Open Chrome Extensions**

Navigate to:
```
chrome://extensions
```

**3. Enable Developer Mode**

Toggle **Developer Mode** on — top right corner of the extensions page.

**4. Load the extension**

Click **Load unpacked** → select the `karmayogi` folder.

The KarmaYogi lotus icon will appear in your Chrome toolbar. You're done.

---

## 🥷 Enable in Incognito (Optional)

By default, Chrome extensions don't run in Incognito. To enable:

1. Go to `chrome://extensions`
2. Find **KarmaYogi** → click **Details**
3. Scroll to **"Allow in Incognito"** → toggle it **ON**

---

## 🛠 Usage

### Blocking a site
1. Click the KarmaYogi icon in your toolbar
2. Type a domain in the input field (e.g. `linkedin.com`)
3. Press **Enter** — it's blocked immediately

### Removing a site
Click the **✕** on any site pill in the popup.

### Setting your intention
Type what you're working on in the **"My Intention"** field in the popup. It will appear on every blocked page as a personal reminder.

### Pausing all blocking
Toggle **Focus Mode** off in the popup. All sites are unblocked until you turn it back on.

### Taking a grace period
On the blocked page, click **"5 Min Grace"** — you'll be allowed through for 5 minutes, then blocking resumes automatically.

---

## 📁 File Structure

```
karmayogi/
├── manifest.json        # Extension config (Manifest V3)
├── background.js        # Service worker: intercepts navigation, manages grace periods
├── blocked.html         # The page shown when a site is blocked
├── blocked.js           # Quote rendering, bell sound, grace period logic
├── blocked.css          # Vedic UI styles for the blocked page
├── popup.html           # Settings panel UI
├── popup.js             # Blocklist management, intention, focus toggle
├── popup.css            # Popup styles
├── theme.css            # Shared CSS variables and font imports
├── quotes.js            # 30 Bhagavad Gita quotes with Sanskrit, transliteration, translation
└── icons/               # Extension icons (16px, 48px, 128px)
```

---

## 🕉 Adding More Gita Quotes

Open `quotes.js` and add an object to the `GITA_QUOTES` array:

```javascript
{
  verse: "6.35",
  sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम्।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥",
  transliteration: "asaṃśayaṃ mahābāho mano durnigrahaṃ calam,\nabhyāsena tu kaunteya vairāgyeṇa ca gṛhyate.",
  translation: "Undoubtedly, O mighty-armed one, the mind is difficult to control and restless. But it can be brought under control by practice and detachment.",
  context: "Krishna acknowledges the restless mind — and gives the two-word answer: practice and detachment"
}
```

Save the file and reload the extension at `chrome://extensions`.

---

## 🎨 Design Philosophy

KarmaYogi's UI follows a **Sacred Minimalism** aesthetic:

- **Colors** — deep charcoal blacks, saffron (#FF9A1F), antique gold (#D4AF37), warm cream
- **Typography** — Noto Serif Devanagari for Sanskrit, Cinzel for headings, EB Garamond for body
- **Atmosphere** — subtle mandala background, radial diya-flame glow, staggered fade-in animations
- **Sound** — a single synthesized temple bell using Web Audio API oscillators at 528 Hz and 396 Hz

The goal: not a blocker that punishes, but a threshold that pauses.

---

## 🧰 Tech Stack

- **Manifest V3** Chrome Extension API
- **chrome.webNavigation** — main-frame navigation interception
- **chrome.storage.sync** — blocklist, focus mode, intention (synced across devices)
- **chrome.storage.local** — daily redirect count, grace period timestamps
- **Web Audio API** — synthesized temple bell, no external audio files
- **Google Fonts** — Noto Serif Devanagari, Cinzel, EB Garamond
- Pure HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies

---

## 🤝 Contributing

Pull requests are welcome. If you'd like to add verified Gita verses, improve the UI, or fix a bug:

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add: your feature"`
4. Push and open a Pull Request

Please keep the design language consistent — sacred, minimal, warm.

---

## 📜 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🙏 Credits

- **Bhagavad Gita** — verses drawn from traditional Sanskrit sources
- **Fonts** — [Google Fonts](https://fonts.google.com): Noto Serif Devanagari, Cinzel, EB Garamond
- **Sound** — synthesized using the Web Audio API, inspired by the resonance of a temple ghanti
- **Built by** [Swarnjeet](https://github.com/swarn6402)

---

*Every moment of focus is an act of karma yoga.*