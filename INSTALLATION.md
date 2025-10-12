# Installation Guide

## ✅ Project Created Successfully!

Your Tekken 3 Chrome Extension project has been created successfully. Follow these steps to get started:

## 📦 Step 1: Install Dependencies

Open your terminal, navigate to the project directory, and run:

```bash
cd /Users/gengliming/Projects/tekken3-chrome-extension
npm install
```

This will install all required dependencies including:
- ⚛️ React 18
- 🧩 Plasmo Framework
- 🔷 TypeScript
- And other dev dependencies

**Estimated installation time:** 2-5 minutes (depending on network speed)

## 🎮 Step 2: Add Game Screenshot (Optional but Recommended)

To make the extension more visually appealing, it's recommended to add a Tekken 3 game screenshot:

1. Visit https://tekken3.cc and capture the game screen
2. Save the screenshot to: `assets/tekken3-screenshot.jpg`

**Tip:** If you don't have a screenshot yet, the extension will display a beautiful animated gradient background!

## 🚀 Step 3: Start Development Server

```bash
npm run dev
```

You should see output similar to:

```
✔ Plasmo ready in 3.5s
  ➜ Build target: chrome-mv3
  ➜ View in browser: chrome://extensions
```

## 🌐 Step 4: Load Extension in Chrome Browser

1. Open Chrome browser
2. Enter in the address bar: `chrome://extensions/`
3. Enable **"Developer mode"** toggle in the top right corner
4. Click the **"Load unpacked"** button in the top left
5. In the file picker, navigate to the project directory
6. Select the `build/chrome-mv3-dev` folder
7. Click the **"Select"** button

## 🎉 Done!

You should now see the extension icon in the Chrome toolbar!

### Using the Extension

1. Click the extension icon in the browser toolbar
2. A beautiful game launcher window will pop up
3. Click the central **play button** ▶️
4. Tekken 3 game will automatically open in a new tab

## 🎨 Customization

### Change Game URL

Edit line 11 in `popup.tsx`:

```typescript
chrome.tabs.create({ url: "https://tekken3.cc" })
```

### Modify Styles

Edit `popup.css` to customize colors, sizes, animations, etc.

### Change Window Size

Modify in `popup.css`:

```css
.popup-container {
  width: 400px;   /* Width */
  height: 300px;  /* Height */
}
```

## 🔧 Development Tips

- Plasmo will automatically rebuild after code changes
- Click the **"Reload"** button on the `chrome://extensions/` page to update the extension
- Use Chrome DevTools for debugging: Right-click on extension popup → "Inspect"

## 📤 Build Production Version

When you're ready to publish the extension:

```bash
npm run build
npm run package
```

This will generate a zip package in the `build` directory that can be uploaded to Chrome Web Store.

## ❓ Having Issues?

Check `QUICKSTART.md` or `README.md` for more help.

---

**Enjoy your game!** 🎮✨
