# Quick Start Guide

## Step 1: Install Dependencies

In the project root directory, run:

```bash
npm install
```

Or use pnpm (recommended, faster):

```bash
pnpm install
```

Or use yarn:

```bash
yarn install
```

## Step 2: Prepare Game Screenshot (Optional)

1. Visit https://tekken3.cc
2. Capture the game screen
3. Save the screenshot as `assets/tekken3-screenshot.jpg`

**Note:** If you don't add a screenshot, the extension will display a dynamic gradient background, which also looks great!

## Step 3: Start Development Server

```bash
npm run dev
```

After the command runs, Plasmo will automatically watch for file changes and rebuild.

## Step 4: Load Extension in Chrome

1. Open Chrome browser
2. Visit `chrome://extensions/`
3. Enable **"Developer mode"** in the top right corner
4. Click **"Load unpacked"** button
5. Select the `build/chrome-mv3-dev` folder in the project
6. Extension loaded successfully!

## Step 5: Test the Extension

1. Find the extension icon in the browser toolbar
2. Click the icon to open the beautiful game launcher window
3. Click the central play button
4. A new tab will automatically open and load Tekken 3 game

## Build Production Version

When you're ready to publish the extension:

```bash
npm run build
```

Built files will be in the `build/chrome-mv3-prod` directory.

## Package for Release

Create a zip package for Chrome Web Store publishing:

```bash
npm run package
```

## FAQ

### Q: Can't find the build directory?
A: Make sure you've run `npm run dev` or `npm run build` command.

### Q: No icon after loading the extension?
A: You can add an `assets/icon.png` file, or use the `assets/icon.svg` provided by the project.

### Q: Play button not responding?
A: Check the browser console for errors, and ensure the extension has permission to open new tabs.

### Q: Want to change the game URL?
A: Edit `chrome.tabs.create({ url: "https://tekken3.cc" })` in the `popup.tsx` file.

## Project Structure

```
tekken3-chrome-extension/
├── popup.tsx              # Popup window main component
├── popup.css              # Stylesheet
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
├── assets/                # Asset files
│   ├── icon.svg          # Extension icon (SVG format)
│   ├── tekken3-screenshot.jpg  # Game screenshot (add manually)
│   └── README.md         # Asset documentation
├── build/                 # Build output directory (auto-generated)
└── node_modules/          # Dependencies (auto-generated)
```

## Enjoy your Tekken 3 game launcher! 🎮
