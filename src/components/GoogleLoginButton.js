import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function GoogleLoginButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button1}>
        <View style={styles.iconRow}>
          <Icon name="google" style={styles.icon}></Icon>
          <Text style={styles.logInWithGoogle}>Log in with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button1: {
    width: 296,
    height: 45,
    backgroundColor: "rgba(70,106,236,1)",
    borderRadius: 12,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 25,
    width: 21
  },
  logInWithGoogle: {
    fontFamily: "SofiaPro-SemiBold",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginLeft: 12
  },
  iconRow: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 68,
    marginLeft: 44,
    marginTop: 11
  }
});

export default GoogleLoginButton;
