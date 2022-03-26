import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

function AppName(props) {
    return (
      <View style={styles.appName}>
        <Text style={styles.text}>Stedi Balance</Text>
        <Text style={styles.email}>User: {props.name}</Text>
      </View>
    );
  }

export default AppName

const styles = StyleSheet.create({
  appName: {
    paddingLeft:20,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 30
  },
  email: {
    color: "white",
    fontWeight: "600",
    fontSize: 15
  }
})