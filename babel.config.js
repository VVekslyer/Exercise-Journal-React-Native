module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
        "module-resolver",
        ["react-native-reanimated/plugin", {
          root: [
            "./src"
          ],
          alias: {
            "react-native-maps": "react-native-web-maps",
        }
      }]
    ]
  };
};
