import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function LogOutButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.logOut}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 141,
    height: 34,
    backgroundColor: "rgba(186,126,71,1)",
    borderRadius: 16
  },
  logOut: {
    fontFamily: "SofiaPro-Medium",
    color: "rgba(255,255,255,1)",
    marginTop: 8,
    marginLeft: 45
  }
});

export default LogOutButton;
