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

function EnterWeightScreen(props) {
  return (
    <View style={styles.container}>
      <BackButton style={styles.backButton}/>
      <H1 text="What is your weight?" style={styles.h1} />
      <View style={styles.weightInputRow}>
        <TextInput
          placeholder="Enter weight..."
          keyboardType="numeric"
          style={styles.weightInput}
        />
        <View style={styles.kgStack}>
          <Text style={styles.kg}>KG</Text>
          <TouchableOpacity style={styles.kgButton}></TouchableOpacity>
        </View>
        <Text style={styles.pole}>|</Text>
        <View style={styles.lbsStack}>
          <Text style={styles.lbs}>LBS</Text>
          <TouchableOpacity style={styles.lbsButton}></TouchableOpacity>
        </View>
      </View>
      <View style={styles.line}></View>
      <AppButton
        text="Continue"
        style={styles.appButton}
      />
      <SkipButton
        button="EnterHeightScreen"
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
  weightInput: {
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    fontSize: 18,
    width: 121,
    height: 24
  },
  kg: {
    top: 0,
    left: 5,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18
  },
  kgButton: {
    top: 2,
    left: 0,
    width: 32,
    height: 19,
    position: "absolute"
  },
  kgStack: {
    width: 32,
    height: 24,
    marginLeft: 65,
    marginTop: 3
  },
  pole: {
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    fontSize: 18,
    marginTop: 3
  },
  lbs: {
    top: 0,
    left: 4,
    position: "absolute",
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    fontSize: 18
  },
  lbsButton: {
    top: 2,
    left: 0,
    width: 38,
    height: 19,
    position: "absolute"
  },
  lbsStack: {
    width: 38,
    height: 24,
    marginTop: 3
  },
  weightInputRow: {
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

export default EnterWeightScreen;
