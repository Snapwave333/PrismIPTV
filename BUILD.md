# Building the Android APK

## Prerequisites

1. **Java Development Kit (JDK) 17+**
   - Install from: https://adoptium.net/
   - Set JAVA_HOME environment variable

2. **Android SDK**
   - Install Android Studio from: https://developer.android.com/studio
   - Or install command-line tools from: https://developer.android.com/studio#command-tools
   - Set ANDROID_HOME to your SDK location

3. **Accept Licenses**
   ```bash
   yes | sdkmanager --licenses
   ```

## Build Commands

### Quick Build
```bash
npm run android
npm run android:open
```
Then build from Android Studio, or use:

### Debug APK
```bash
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug
```
Output: `android/app/build/outputs/apk/debug/app-debug.apk`

### Release APK
```bash
npm run build
npx cap sync android
cd android && ./gradlew assembleRelease
```
Output: `android/app/build/outputs/apk/release/app-release.apk`

## Features Configured

- Bottom navigation for mobile
- Hardware back button handling
- Dark status bar
- HLS streaming support
- Network permissions for IPTV streaming
- Portrait/landscape orientation support
