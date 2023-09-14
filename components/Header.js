import React from "react";
import { StyleSheet, View, Text} from "react-native";


export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Todo list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 7,
    height: 50,
    width: '100%',
    backgroundColor: 'silver',
  },
  text: {
    fontSize: 27,
    color: 'gray',
    textAlign: "center",
  }
});