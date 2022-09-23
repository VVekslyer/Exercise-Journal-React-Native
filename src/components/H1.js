import React from "react";
import { StyleSheet, View, Text } from "react-native";

function H1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontFamily: "SofiaPro-SemiBold",
    color: "#121212",
    height: 110,
    width: 236,
    fontSize: 40
  }
});

export default H1;
