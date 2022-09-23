import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function IconButton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.iconRow}>
          <Icon name={props.icon || "add"} style={styles.icon}></Icon>
          <Text style={styles.addWorkout}>
            {props.addWorkout || "Add Workout"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 330,
    height: 38,
    backgroundColor: "rgba(186,126,71,1)",
    borderRadius: 12,
    flexDirection: "row",
    marginTop: -2
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginTop: 1
  },
  addWorkout: {
    fontFamily: "SofiaPro-Medium",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 94,
    letterSpacing: 0.5,
    textAlign: "center",
    marginLeft: 71
  },
  iconRow: {
    height: 21,
    flexDirection: "row",
    flex: 1,
    marginRight: 118,
    marginLeft: 27,
    marginTop: 8
  }
});

export default IconButton;
