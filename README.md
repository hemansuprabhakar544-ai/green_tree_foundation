# Green Coverage Network — Expo Android App

React Native / Expo Android app for Green Coverage Network.

## Run locally

```bash
npm install
npx expo start
```

Scan the QR code with Expo Go on Android.

## Android build

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```

## Project

- Expo SDK 55
- Expo Router
- React Native Maps
- Expo Location
- AsyncStorage for offline survey data
- Android-first navigation and survey workflow
