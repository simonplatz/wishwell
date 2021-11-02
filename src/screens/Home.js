import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import Card from "../components/Card.js";

export default Home = ({navigation}) => {
  return (
    <View style={style.home}>
      <Card title="titles"/>
      <Text>Home Screen</Text>
      <Button title="go to next view" onPress={ () => {
        navigation.navigate('MyNiceView', { viewName: "titlesd"})
      }}></Button>
    </View>
  );
}

const style = StyleSheet.create({
  home : {
    display: "flex", 
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: "column"
  }
})
