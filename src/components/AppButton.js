import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function AppButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{props.text || "Sign Up"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 296,
    height: 45,
    backgroundColor: "rgba(186,126,71,1)",
    borderRadius: 12
  },
  text: {
    fontFamily: "SofiaPro-Medium",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 116
  }
});

export default AppButton;
