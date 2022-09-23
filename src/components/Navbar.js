import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./Home";
import Stats from "./Stats";
import Profile from "./Profile";

function Navbar(props, {navigation}) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.navbar}>
        <Home homeButton="HomeScreen" style={styles.home}></Home>
        <Stats style={styles.stats}></Stats>
        <Profile style={styles.profile}></Profile>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  home: {
    height: 32,
    width: 32
  },
  stats: {
    height: 32,
    width: 32,
    marginLeft: 105
  },
  profile: {
    height: 32,
    width: 32,
    marginLeft: 102
  },
  navbar: {
    height: 32,
    flexDirection: "row",
    flex: 1
  }
});

export default Navbar;
