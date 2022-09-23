import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Stats(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={() => console.log("Navigate to StatsScreen")}
        style={styles.statsButton}
      >
        <Icon name="chart-line-variant" style={styles.statsIcon}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  statsButton: {
    width: 32,
    height: 32,
    backgroundColor: "rgba(230,230, 230,0)"
  },
  statsIcon: {
    color: "rgba(128,128,128,1)",
    fontSize: 22,
    width: 22,
    height: 24,
    marginTop: 4,
    marginLeft: 5
  }
});

export default Stats;
