import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import EmailScreen from "./src/screens/EmailScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import StatsScreen from "./src/screens/StatsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import EnterWeightScreen from "./src/screens/EnterWeightScreen";
import EnterHeightScreen from "./src/screens/EnterHeightScreen";
import EnterNameScreen from "./src/screens/EnterNameScreen";

const DrawerNavigation = createDrawerNavigator({
  StatsScreen: StatsScreen,
  EmailScreen: EmailScreen,
  HomeScreen: HomeScreen,
  ProfileScreen: ProfileScreen,
  WelcomeScreen: WelcomeScreen,
  EnterWeightScreen: EnterWeightScreen,
  EnterHeightScreen: EnterHeightScreen,
  EnterNameScreen: EnterNameScreen
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    EmailScreen: EmailScreen,
    StatsScreen: StatsScreen,
    HomeScreen: HomeScreen,
    WelcomeScreen: WelcomeScreen,
    ProfileScreen: ProfileScreen,
    EnterWeightScreen: EnterWeightScreen,
    EnterHeightScreen: EnterHeightScreen,
    EnterNameScreen: EnterNameScreen
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "SofiaPro-Medium": require("./src/assets/fonts/SofiaPro-Medium.ttf"),
      "SofiaPro-Light": require("./src/assets/fonts/SofiaPro-Light.ttf"),
      SofiaProRegular: require("./src/assets/fonts/SofiaProRegular.ttf"),
      "SofiaPro-SemiBold": require("./src/assets/fonts/SofiaPro-SemiBold.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
