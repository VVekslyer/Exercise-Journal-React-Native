import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Navbar from "../components/Navbar";

// Implement a simple graph that measures volume in the stats screen, one with the following data set,
// x: January 1, y: 25 kg
// x: February 1, y: 30 kg
// x: March 1, y: 50 kg
// You can use whatever graphing or chart library that supports React or React Native

function StatsScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Stats Screen</Text>
      <Navbar style={styles.navbar}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: "SofiaProRegular",
    color: "#121212",
    height: 27,
    width: 232,
    textAlign: "center"
  },
  navbar: {
    width: 303,
    height: 32,
    top: '75%'
  }
});

export default StatsScreen;
