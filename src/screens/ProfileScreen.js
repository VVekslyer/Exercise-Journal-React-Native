import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Switch } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import UserAvatar from "../components/UserAvatar";
import Divider from "../components/Divider";
import LogOutButton from "../components/LogOutButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Setting from "../components/Setting";
import Navbar from "../components/Navbar";

function ProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.orangeEllipseStack}>
        <Svg viewBox="0 0 99.11 99.11" style={styles.orangeEllipse}>
          <Ellipse  // React definitely gives you a lot of freedom... 👀
            stroke="rgba(186,126,71,1)"
            strokeWidth={0}
            fill="rgba(186,126,71,1)"
            cx={50}
            cy={50}
            rx={50}
            ry={50}
          />
        </Svg>
        <UserAvatar style={styles.userAvatar}/>
      </View>
      <Text style={styles.vitaliyVekslyer}>Vitaliy Vekslyer</Text>
      <Text style={styles.email}>vv@exercisejournal.com</Text>
      <Divider style={styles.divider}></Divider>

      <LogOutButton style={styles.logOutButton} />
      <TouchableOpacity style={styles.darkModeSwitch}>
        <Icon name="weather-night" style={styles.nightIcon}></Icon>
        <Text style={styles.switchToDarkMode}>Switch to Dark Mode</Text>
        <Switch
          value={false}
          disabled={false}
          trackColor={{
            true: "rgba(186,126,71,1)",
            false: "rgba(230, 230, 230,1)"
          }}
          style={styles.switch}
        ></Switch>
      </TouchableOpacity>
      <Setting 
        text="Edit Profile"
        style={styles.profileSettings}></Setting>
      <Setting
        profileIconName="user"
        text="Account Settings"
        profileIcon="settings"
        style={styles.accountSettings}
      ></Setting>
      <Setting
        profileIconName="user"
        text="Export to Google Sheets"
        profileIcon="sidebar"
        style={styles.setting}
      ></Setting>
      <Navbar style={styles.navbar}></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  orangeEllipse: {
    top: 0,
    left: 0,
    width: 97,
    height: 99,
    position: "absolute"
  },
  userAvatar: {
    position: "absolute",
    top: 0,
    left: 1,
    height: 99,
    width: 95
  },
  orangeEllipseStack: {
    width: 97,
    height: 99,
    marginTop: 123
  },
  vitaliyVekslyer: {
    fontFamily: "SofiaPro-Medium",
    color: "#121212",
    fontSize: 20,
    marginTop: 15,
    alignSelf: "center"
  },
  email: {
    fontFamily: "SofiaPro-Medium",
    color: "rgba(186,126,71,1)",
    height: 23,
    width: 210,
    textAlign: "center",
    fontSize: 16,
    marginTop: 3
  },
  divider: {
    height: 1,
    width: 333,
    marginTop: 17,
  },
  logOutButton: {
    height: 34,
    width: 141,
    marginTop: 289
  },
  darkModeSwitch: {
    width: 303,
    height: 50,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "rgba(224,227,231,1)",
    flexDirection: "row",
    marginTop: -291
  },
  nightIcon: {
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    height: 24,
    width: 22,
    marginLeft: 16,
    marginTop: 12
  },
  switchToDarkMode: {
    fontFamily: "SofiaPro-Medium",
    color: "rgba(87,99,108,1)",
    fontSize: 12,
    marginLeft: 15,
    marginTop: 16
  },
  switch: {
    marginLeft: 81
  },
  profileSettings: {
    height: 46,
    width: 303,
    marginTop: 11
  },
  navbar: {
    width: 303,
    height: 32,
    marginTop: '23%'
  },
  accountSettings: {
    width: 303,
    height: 46,
    marginTop: 12
  },
  setting: {
    width: 303,
    height: 46,
    marginTop: 18
  }
});

export default ProfileScreen;
