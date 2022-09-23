import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import H1 from "../components/H1";
import BackButton from "../components/BackButton";
import AppButton from "../components/AppButton";
import SkipButton from "../components/SkipButton";

function EmailScreen(props) {
  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton}/>
      <H1 text={"What is\nyour email?"} style={styles.h1}/>
      <TextInput
        placeholder="Enter your email..."
        keyboardType="email-address"
        style={styles.emailInput}
      />
      <View style={styles.line}></View>
      <Text style={styles.subtitle}>Please enter a valid email address.</Text>
      <AppButton
        text="Continue"
        style={styles.appButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButton: {
    height: 20,
    width: 20,
    right: '42%',
    bottom: '10%'
  },
  h1: {
    height: 110,
    width: 236,
    marginLeft: -25
  },
  emailInput: {
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    fontSize: 18,
    width: 252,
    height: 24,
    marginTop: 103
  },
  line: {
    width: 252,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 5
  },
  subtitle: {
    fontFamily: "SofiaPro-Light",
    textAlign: "left",
    color: "#121212",
    fontSize: 12,
    marginTop: 15,
    right: 30
  },
  appButton: {
    width: 296,
    height: 45,
    marginTop: 200,
    alignSelf: "center"
  },
  skipButton: {
    height: 19,
    width: 85,
    marginTop: 15
  }
});

export default EmailScreen;
