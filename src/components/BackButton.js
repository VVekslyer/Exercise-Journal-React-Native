import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function BackButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.backStack}>
        <Icon name="arrow-left" style={styles.back}></Icon>
        <TouchableOpacity
          onPress={() => console.log("Navigate to Go Back")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  back: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 20
  },
  button: {
    top: 0,
    left: 0,
    width: 19,
    height: 20,
    position: "absolute",
    borderRadius: 40
  },
  backStack: {
    width: 20,
    height: 20
  }
});

export default BackButton;
