import React from "react";
import { StyleSheet, TouchableOpacity, Text} from "react-native";


export default function List({ listElement, deleteHandler }) {
  return (
    <TouchableOpacity onPress={() => deleteHandler(listElement.key)}>
      <Text style={styles.text}>{listElement.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    padding: 10,
    marginTop: 20,
    textAlign: "center",
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginLeft: '20%',
    width: '60%',
    
  }
});