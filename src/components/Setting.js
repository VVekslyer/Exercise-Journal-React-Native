import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Setting(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.editProfileButton}>
        <View style={styles.profileIconRow}>
          <Icon
            name={props.profileIcon || "user"}
            style={styles.profileIcon}
          ></Icon>
          <Text style={styles.text}>
            {props.text || "Setting"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  editProfileButton: {
    width: 303,
    height: 46,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "rgba(224,227,231,1)",
    flexDirection: "row"
  },
  profileIcon: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    height: 20,
    width: 20
  },
  text: {
    fontFamily: "SofiaPro-Medium",
    color: "rgba(87,99,108,1)",
    fontSize: 12,
    marginLeft: 16,
    marginTop: 2,
    width: 300
  },
  profileIconRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: 190,
    marginLeft: 17,
    marginTop: 13
  }
});

export default Setting;
