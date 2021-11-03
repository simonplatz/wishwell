import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans"

import Card from "../components/Card.js";

export default Home = ({navigation}) => {
  let [fontsLoaded] = useFonts({OpenSans_700Bold, });

  if(!fontsLoaded) {
    return <View></View>
  }
  else {
    return (
      <View style={style.home}>
        <View style={style.textContainer}>
          <Text style={style.headerText}>
            Wishlists
          </Text>
        </View>
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
}

const style = StyleSheet.create({
  home : {
    display: "flex", 
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: "column",
    margin: "5%"
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%"
  },
  headerText: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 36,
    textAlign: 'left'
  }
})
