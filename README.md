# FUTURE_FS_01: Niti Khandelwal — Hyper-Modern Portfolio (Skiper UI Edition)

A high-performance personal portfolio website engineered with **Skiper UI** principles, featuring futuristic micro-interactions, dark-mode spotlight cards, interactive bento grids, 3D card tilt physics, simulated code terminal, Web Audio synthesizers, and real-time email dispatching via Node.js/Express.

Built for **Future Interns** (Full Stack Web Development, Task 1).

**Live site:** [Deploy to Render or Railway]

---

## ✨ Skiper UI Features Everywhere

- 🔮 **Skiper UI Spotlight Tracker**: Every card dynamically tracks mouse position (`--mouse-x`, `--mouse-y`) with interactive radial luminescence.
- ⚡ **Skiper Border Beam (`border-beam`)**: Continuous rotating conic gradient border beams sweeping along cards and hero headers.
- 🛸 **Floating macOS Island Dock**: Glassmorphism navbar with active pill slider, sound synthesizer toggle, theme switcher, and command palette trigger.
- ⌨️ **Command Palette (⌘K / Ctrl+K)**: Instant keyboard-driven navigation HUD with fuzzy search, shortcuts, quick email copy, and theme switching.
- 💻 **Interactive Code Terminal**: Live simulated developer config with syntax highlighting, copy button, and interactive code execution with feedback.
- 📦 **Bento Grid Architecture**: Asymmetric responsive bento boxes showcasing experience at Future Interns and Dotsquares, education at JECRC University, campus honors, and LeetCode algorithmic benchmarks (150+ solved).
- 🎨 **Infinite Tech Marquee**: Double-buffered smooth 60fps infinite marquee with 16+ modern web development technologies.
- 🚀 **Projects Showcase & 3D Tilt**: Interactive category filtering (All, Full Stack, AI & Data), preview mockups, tech badges, and deep-dive modals with architectural highlights.
- 📊 **Skills Matrix & Radar**: Animated proficiency meters for Frontend, Backend, Cloud & Database, and Computer Science fundamentals.
- 📬 **Interactive Contact Experience**:
  - Live IST local clock widget (Jaipur, India).
  - One-click copy email button with instant toast feedback.
  - Neo-glass form connected to Node.js backend.
  - Particle confetti celebration burst on message delivery!
- 🔊 **Web Audio Synthesizer**: Subtle haptic sound effects on clicks, theme changes, and transmissions (with mute toggle).
- 🌓 **Dynamic Theme Engine**: Obsidian Dark Mode and Clean Light Mode with smooth transition.
- 🛡️ **Security & Anti-Spam**: Sliding-window rate limiting (5 requests / 15 minutes) and honeypot traps.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 Custom Properties (Skiper UI tokens, Glassmorphism, 3D Tilt), Modern Vanilla JavaScript (ES6+), Web Audio API, HTML5 Canvas (Ambient Starfield & Confetti Engine)
- **Backend:** Node.js, Express.js
- **Services:** Nodemailer (Gmail SMTP), Express Rate Limit, MongoDB / Mongoose (optional)

---

## 🚀 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Configure environment (optional for email dispatch)
cp .env.example .env

# 3. Start development server
npm start
```

Open **http://localhost:3000** in your browser.

> **Note on Email:** In local development without Gmail credentials, messages are gracefully logged to the server console with full details. When `EMAIL_USER` and `EMAIL_PASS` (Google App Password) are configured in `.env`, real emails are delivered directly to your inbox!

---

## 🎹 Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Ctrl + K` or `⌘ + K` | Open Skiper UI Command Palette |
| `Esc` | Close Command Palette or Project Modal |
| `T` | Toggle Light / Dark Theme |
| `M` | Toggle Audio Synthesizer |
| `E` | Quick-copy email address |
