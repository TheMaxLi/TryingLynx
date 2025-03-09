## Rspeedy project

This is a ReactLynx project bootstrapped with `create-rspeedy`.

## Getting Started On Mac

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.

## On Windows:

Seems like they've fixed this follow for windows so only follow the steps below if your versions are under:
@lynx-js/react: v0.105.1
@lynx-js/react-rsbuild-plugin: v0.9.1
@lynx-js/rspeedy: v0.8.3

If you are using the latest version of lynx on windows please follow the same steps as getting started on Mac

1. Install the following npm package

```bash
npm i @lynx-js/react-rsbuild-plugin-canary
```

2. Go to lynx.config.ts file and update this import from:

```js
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
```

To this:

```js
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin-canary";
```

3. Goto node_modules/@lynx-js/tasm/index.js file and search for the

```js
let encode = encode_napi;
```

and replace it with

```js
let encode = getEncodeMode();
```

4. Then you can

```bash
npm install
```

and, run the development server:

```bash
npm run dev
```

### Download the Lynx Explorer APK:

Grab the LynxExplorer-noasan-release.apk file from this GitHub release: https://github.com/lynx-family/lynx/releases/tag/3.2.0-rc.0

### Set up an Android Virtual Device:

In Android Studio's Virtual Device Manager, create a new device.
I recommend these settings:
API Level: 30 (Android R)
ABI: x86
You can customize the hardware to your liking.

### Install Lynx Explorer:

Start your Android emulator and drag-and-drop the downloaded APK file to install it.

### Launch Lynx Explorer:

Open the Lynx Explorer app on your emulator.

### Enter your development server URL:

Run npm run dev in your Lynx project.
enter the url that is shown into the Lynx Explorer.
Now you should see your Lynx app running in the emulator!

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.
