import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function Date(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.num}>7</Text>
      </TouchableOpacity>
      <Text style={styles.wed}>Wed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(186,126,71,1)",
    borderRadius: 100,
    marginTop: 20
  },
  num: {
    fontFamily: "SofiaProRegular",
    color: "rgba(255,255,255,1)",
    marginTop: 10,
    marginLeft: 17
  },
  wed: {
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    height: 40,
    width: 32,
    textAlign: "center",
    marginTop: -61,
    marginLeft: 4
  }
});

export default Date;
