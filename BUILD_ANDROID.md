# Android build checklist

## Test with Expo Go
```bash
npm install
npx expo start
```
Scan the QR code with Expo Go on Android.

## Fix dependency mismatches
```bash
npx expo install --fix
npx expo-doctor
npx expo start -c
```

## Build an installable APK with EAS
```bash
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```

For Play Store:
```bash
eas build -p android --profile production
```

The map uses `react-native-maps`. A standalone Android build may require Google Maps API configuration depending on the selected map setup.