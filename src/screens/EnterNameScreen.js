import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import H1 from "../components/H1";
import BackButton from "../components/BackButton";
import AppButton from "../components/AppButton";
import SkipButton from "../components/SkipButton";

function EnterNameScreen(props) {
  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton}/>
      <H1 text="How should we call you?" style={styles.h1} />
      <TextInput
        placeholder="Enter your name..."
        keyboardType="email-address"
        style={styles.enterYourName}
      />
      <View style={styles.line}></View>
      <Text style={styles.subtitle}>This can be changed later.</Text>
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
  enterYourName: {
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    fontSize: 18,
    width: 252,
    height: 24,
    marginTop: 103,
    marginLeft: 55
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
    marginTop: 9
  },
  appButton: {
    width: 296,
    height: 45,
    marginTop: 284,
    alignSelf: "center"
  },
  skipButton: {
    width: 85,
    height: 19,
    marginTop: 15
  }
});

export default EnterNameScreen;
