import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Home(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => console.log("Navigate to HomeScreen")}
        style={styles.homeButton}
      >
        <Icon name="home" style={styles.homeIcon}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  homeButton: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(230,230, 230,0)"
  },
  homeIcon: {
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    height: 22,
    width: 22,
    marginTop: 5,
    marginLeft: 5
  }
});

export default Home;
