import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import H1 from "../components/H1";
import BackButton from "../components/BackButton";
import AppButton from "../components/AppButton";
import SkipButton from "../components/SkipButton";

function EnterHeightScreen(props) {
  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton}/>
      <H1 text="What is your height?" style={styles.h1} />
      <View style={styles.heightInputRow}>
        <TextInput
          placeholder="Enter height..."
          keyboardType="numeric"
          style={styles.heightInput}
        />
        <View style={styles.cmStack}>
          <Text style={styles.cm}>CM</Text>
          <TouchableOpacity style={styles.cmButton}></TouchableOpacity>
        </View>
        <Text style={styles.kgLbs2}>|</Text>
        <View style={styles.ftStack}>
          <Text style={styles.ft}>FT</Text>
          <TouchableOpacity style={styles.ftButton}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.line}></View>
      <AppButton
        text="Continue"
        style={styles.appButton}
      />
      <SkipButton
        button="EnterNameScreen"
        style={styles.skipButton}
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
  heightInput: {
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    fontSize: 18,
    width: 121,
    height: 24
  },
  cm: {
    top: 0,
    left: 1,
    position: "absolute",
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    fontSize: 18
  },
  cmButton: {
    top: 2,
    left: 0,
    width: 32,
    height: 19,
    position: "absolute"
  },
  cmStack: {
    width: 32,
    height: 24,
    marginLeft: 63,
    marginTop: 3
  },
  kgLbs2: {
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    fontSize: 18,
    marginLeft: 2,
    marginTop: 3
  },
  ft: {
    top: 0,
    left: 5,
    position: "absolute",
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    fontSize: 18
  },
  ftButton: {
    top: 2,
    left: 0,
    width: 38,
    height: 19,
    position: "absolute"
  },
  ftStack: {
    width: 38,
    height: 24,
    marginTop: 3
  },
  heightInputRow: {
    height: 27,
    flexDirection: "row",
    marginTop: 103,
    marginLeft: 55,
    marginRight: 60
  },
  line: {
    width: 252,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 5
  },
  appButton: {
    width: 296,
    height: 45,
    marginTop: 309,
    alignSelf: "center"
  },
  skipButton: {
    width: 85,
    height: 19,
    marginTop: 15
  }
});

export default EnterHeightScreen;
