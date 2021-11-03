import React from 'react';
import { StyleSheet, FlatList, Button, Text, View } from 'react-native';
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans"

import Card from "../components/Card.js";

function header() { 
  return ( 
    <View >
      <Text style={style.headerText} >
        Wishlists
      </Text>
    </View>
  )
}

export default Home = ({navigation}) => {
  let [fontsLoaded] = useFonts({OpenSans_700Bold, });

  let wishList = []

  for(let i = 0; i < 5; i++) {
    wishList.push({          
      id: i,
      title: "WishList",
      numGifts: i * 10 + 2,
      imageUri: require('../../assets/img/img1.jpg'),
      imageUri2: require('../../assets/img/img2.jpg')
    })
  }

  const renderItem = ({ item }) => (
      <Card 
        title={item.title}
        subtitle={item.numGifts + " wishes"}
        imageUri={item.imageUri}
        imageUri2={item.imageUri2}
      />
  )

  if(!fontsLoaded) {
    return <View></View>
  }
  else {
    return (
      <View>
          <FlatList
              data={wishList}
              renderItem={renderItem}
              contentContainerStyle={style.home}
              ListHeaderComponent={header}
          >
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
    alignItems: 'flex-start', 
    justifyContent: 'center',
    flexDirection: "column",
    margin: "5%"
  },
  headerText: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 36,
    width: "100%", 
  }
})
