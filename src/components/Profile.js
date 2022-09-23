import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Profile(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to ProfileScreen")}
        style={styles.profileButton}
      >
        <Icon name="user" style={styles.profileIcon}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  profileButton: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(230,230, 230,0)"
  },
  profileIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 22,
    width: 22,
    height: 22,
    marginTop: 5,
    marginLeft: 5
  }
});

export default Profile;
