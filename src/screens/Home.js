import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

import Card from "../components/Card.js";

export default Home = ({navigation}) => {
  return (
    <View style={style.home}>
      <Card 
        title="Tiles" 
        subtitle="20 wishes"
        imageUri={require('../../assets/img/img1.jpg')}
        imageUri2={require('../../assets/img/img2.jpg')}
      />
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
