import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function SkipButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.skipForNowStack}>
        <Text style={styles.skipForNow}>Skip For Now</Text>
        <TouchableOpacity
          onPress={() => console.log("Navigate to next screen")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  skipForNow: {
    top: 0,
    left: 2,
    position: "absolute",
    fontFamily: "SofiaPro-Medium",
    color: "#121212"
  },
  button: {
    top: 3,
    left: 0,
    width: 85,
    height: 16,
    position: "absolute"
  },
  skipForNowStack: {
    width: 85,
    height: 19
  }
});

export default SkipButton;
