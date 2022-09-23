
## Steps to run project

In the project directory, you can run:

### `yarn` or `npm install`

and then:

### `expo install expo-modules-core`

This will add the dependencies required to run the project.

### `yarn start` or `npm start`

This will start the project.

You can use the following options to run the project:

- Android devices
- Android emulator via Android Studio (https://developer.android.com/studio)
- iOS devices
- iOS emulator via Xcode (requires macOS)
- Web (would not recommend 👀)

**Note: If you want to add custom fonts in the project please refer to these steps**

1. Add Fonts to an "assets/fonts" folder in the root of your project.
2. Add rnpm to package.json providing the path to the font files:

```
"rnpm": {
  "assets": [
    "./assets/fonts/"
  ]
}
```

3. Run react-native link

##### This should add your custom fonts in the react native project.
