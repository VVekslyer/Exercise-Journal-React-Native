import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text
} from "react-native";
import AppButton from "../components/AppButton";
import GoogleLoginButton from "../components/GoogleLoginButton";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated />
      <View style={styles.button2Stack}>
        <TouchableOpacity style={styles.button2}></TouchableOpacity>
        <Text style={styles.orLogIn}>Or Log In</Text>
      </View>
      <Text style={styles.welcome}>Welcome.</Text>
      <Text style={styles.subtitle}>
        track your exercise {"\n"}progress for accountability.
      </Text>
      <AppButton style={styles.appButton}></AppButton>
      <Text style={styles.or}>Or</Text>
      <GoogleLoginButton style={styles.googleLoginButton}></GoogleLoginButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  button2: {
    top: 2,
    left: 0,
    width: 63,
    height: 15,
    position: "absolute"
  },
  orLogIn: {
    top: 0,
    left: 2,
    position: "absolute",
    fontFamily: "SofiaPro-Medium",
    color: "rgba(255,255,255,1)"
  },
  button2Stack: {
    width: 63,
    height: 19,
    marginTop: 714,
    marginLeft: 156
  },
  welcome: {
    fontFamily: "SofiaPro-SemiBold",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: -625,
    marginLeft: 50
  },
  subtitle: {
    fontFamily: "SofiaPro-Light",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 50
  },
  appButton: {
    height: 45,
    width: 296,
    marginTop: 332,
    marginLeft: 40
  },
  or: {
    fontFamily: "SofiaPro-Medium",
    color: "rgba(255,255,255,1)",
    marginTop: 16,
    marginLeft: 179
  },
  googleLoginButton: {
    height: 45,
    width: 296,
    marginTop: 16,
    marginLeft: 40
  }
});

export default WelcomeScreen;
