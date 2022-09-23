import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Date from "../components/Date";
import InactiveDate from "../components/InactiveDate";
import IconButton from "../components/IconButton";
import Navbar from "../components/Navbar";

function HomeScreen(props, { navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeBackStack}>
        <Text style={styles.welcomeBack}>Welcome back,</Text>
        <Text style={styles.vitaliy}>Vitaliy.</Text>
      </View>
      <View style={styles.calendar}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.calendar_contentContainerStyle}
        >
          <View style={styles.dateRow}>
            <Date style={styles.date} />
            <InactiveDate style={styles.inactiveDate} />
            <InactiveDate style={styles.inactiveDate1} />
            <InactiveDate style={styles.inactiveDate2} />
            <InactiveDate style={styles.inactiveDate3} />
            <InactiveDate style={styles.inactiveDate4} />
            <InactiveDate style={styles.inactiveDate5} />
            <InactiveDate style={styles.inactiveDate6} />
            <InactiveDate style={styles.inactiveDate7} />
          </View>
        </ScrollView>
      </View>
      <IconButton style={styles.appButton} />
      <Navbar style={styles.navbar} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcomeBack: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "SofiaPro-Medium",
    color: "#121212",
    height: 23,
    width: 156,
    letterSpacing: 0.5
  },
  vitaliy: {
    top: 12,
    left: 0,
    position: "absolute",
    fontFamily: "SofiaPro-Medium",
    color: "#121212",
    height: 37,
    width: 103,
    fontSize: 30
  },
  welcomeBackStack: {
    width: 156,
    height: 49,
    marginTop: 55,
    marginLeft: 22
  },
  calendar: {
    width: 510,
    height: 64,
    marginTop: 14,
    marginLeft: 13
  },
  calendar_contentContainerStyle: {
    width: 607,
    height: 64
  },
  date: {
    height: 60,
    width: 40
  },
  inactiveDate: {
    height: 58,
    width: 40,
    marginLeft: 30
  },
  inactiveDate1: {
    height: 58,
    width: 40,
    marginLeft: 30
  },
  inactiveDate2: {
    height: 58,
    width: 40,
    marginLeft: 30
  },
  inactiveDate3: {
    height: 58,
    width: 40,
    marginLeft: 30
  },
  inactiveDate4: {
    height: 58,
    width: 40,
    marginLeft: 30
  },
  inactiveDate5: {
    height: 58,
    width: 40,
    marginLeft: 30
  },
  inactiveDate6: {
    height: 58,
    width: 40,
    marginLeft: 30
  },
  inactiveDate7: {
    height: 58,
    width: 40,
    marginLeft: 30
  },
  dateRow: {
    height: 60,
    flexDirection: "row",
    marginTop: -6,
    marginLeft: 7,
    marginRight: -97
  },
  appButton: {
    height: 33,
    width: 330,
    marginTop: 420,
    marginLeft: '4.2%',
    marginBottom: '1%'
  },
  navbar: {
    height: 32,
    width: 303,
    marginTop: 15,
    marginLeft: 28
  }
});

export default HomeScreen;
