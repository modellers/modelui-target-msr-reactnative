# modelui-target-msr-reactnative
React Native app

## Styles
Following are free and corss platform
  - https://reactnativeelements.com/docs (cross platform design, skipped since it requires rewireing)
    - yarn add @rneui/themed @rneui/base
  - https://akveo.github.io/react-native-ui-kitten/docs/design-system/design-system-theme#eva-design-system-theme
  - https://docs.nativebase.io/?utm_source=HomePage&utm_medium=Hero_Fold&utm_campaign=NativeBase_3
  - https://github.com/xotahal/react-native-material-ui 
  - https://github.com/xinthink/react-native-material-kit
## Targets
Notes for different targets
### Web

Requires adding 

    npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2


### EAS (for Android and IOs)

Follow these instructions https://docs.expo.dev/build/introduction/

Running these commands
   1. npm install -g eas-cli
   2. eas login
   3. (eas build:configure)
   4. eas build -p ios --profile preview  # for ios simulator
   5. (specify bundle identifier)
   6. wait for queue
