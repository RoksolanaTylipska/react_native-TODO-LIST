import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Header from './components/Header';
import { useState } from 'react';
import List from './components/List';
import Form from './components/Form';

export default function App() {

  const [list, setList] = useState([
  {text: 'Css', key: '1'},
  {text: 'Html', key: '2'},
  {text: 'JavaScript', key: '3'},
  ])

  const addHandler = (text) => {
    setList((list) => {
      return [
        ...list,
        { text: text, key: Math.random().toString(36).substring(7) }
      ]
    })
  }

  const deleteHandler = (key) => {
    setList((list) => {
      return list.filter(el => el.key !== key)
    } )
  }

  return (
    <View style={styles.container}>
      <Image source={{
        width: 150,
        height: 150,
        uri: 'https://assets.website-files.com/60da18e0504ac34bc54c5afa/62ec007bc60a5c24d76050c2_Big%20Qlo03JjedHjQkokQgptsWRWJUHOsc6rtWeqgVO0E.png'
      }} style={styles.image}/>

      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={list} renderItem={({ item }) => (
          <List listElement={item} deleteHandler={deleteHandler} />
        )}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    marginHorizontal: 'auto',
    marginBottom: 20,
    marginTop: 20
  }
});
