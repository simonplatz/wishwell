import React from 'react';
import { StyleSheet, FlatList, Button, Text, View } from 'react-native';
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans"

import Card from "../components/Card.js";

export default Home = ({navigation}) => {
  let [fontsLoaded] = useFonts({OpenSans_700Bold, });

  let wishList = []

  for(let i = 0; i < 5; i++) {
    wishList.push({          
      id: i,
      title: "WishList",
      imageUri: require('../../assets/img/img1.jpg'),
      imageUri2: require('../../assets/img/img2.jpg')
    })
  }

  const renderItem = ({ item }) => {
      <Card 
        title={item.title}
        imageUri={item.imageUri}
        imageUri2={item.imageUri2}
      />
  }

  if(!fontsLoaded) {
    return <View></View>
  }
  else {
    console.log(wishList)
    return (
      <View style={style.home}>
        <View style={style.textContainer}>
          <Text style={style.headerText}>
            Wishlists
          </Text>
        </View>
        <FlatList>
            data={wishList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        </FlatList>
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
