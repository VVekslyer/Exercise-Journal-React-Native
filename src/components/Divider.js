import React from "react";
import { StyleSheet, View } from "react-native";

function Divider(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E6E6E6"
  }
});

export default Divider;
