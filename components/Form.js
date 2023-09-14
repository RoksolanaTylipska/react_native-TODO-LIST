import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button} from "react-native";


export default function Form({ addHandler }) {
  const [value, setValue] = useState('')

  const onChange = (text) => {
    setValue(text)
  }

  return (
    <View style={styles.main}>
      <TextInput style={styles.input} onChangeText={onChange} placeholder="add item"/>
      <Button style={styles.button} title="add to list" onPress={() => {addHandler(value)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginLeft: '20%',
    width: '60%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginTop: 30,
    marginBottom: 25,
  },
  button: {
    width: '60%',
  }
});