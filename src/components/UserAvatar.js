import React from "react";
import { StyleSheet, View, Image } from "react-native";

function UserAvatar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/Pixel_me_.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 95,
    height: 99,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "rgba(186,126,71,1)",
    borderStyle: "solid"
  }
});

export default UserAvatar;
