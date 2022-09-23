import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function InactiveDate(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.thu}>Thu</Text>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.num1}>8</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  thu: {
    fontFamily: "SofiaPro-Light",
    color: "#121212",
    height: 20,
    width: 32,
    textAlign: "center",
    marginLeft: 4
  },
  button1: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(219,135,34,0)",
    borderRadius: 100,
    marginTop: 4
  },
  num1: {
    fontFamily: "SofiaProRegular",
    color: "rgba(0,0,0,1)",
    marginTop: 9,
    marginLeft: 17
  }
});

export default InactiveDate;
