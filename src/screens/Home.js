import React from 'react';
import { StyleSheet, FlatList, Pressable, Text, View } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans"

import Card from "../components/Card.js";

function header() { 
  return ( 
    <View >
      <Text style={styles.headerText} >
        Wishlists
      </Text>
    </View>
  )
}

function separator() {
  return (
    <View style={{height:10}}>
    </View>
  )
}


export default Home = ({navigation}) => {
  let [fontsLoaded] = useFonts({OpenSans_700Bold, });

  let wishList = []

  for(let i = 0; i < 5; i++) {
    wishList.push({          
      id: i,
      title: "WishList" + i,
      numGifts: i * 10 + 2,
      imageUri: require('../../assets/img/img1.jpg'),
      imageUri2: require('../../assets/img/img2.jpg')
    })
  }

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate('Wishes', 
          {
            id: item.id,
            title: item.title 
          }
        )
      }}
    >
      <Card 
        title={item.title}
        subtitle={item.numGifts + " wishes"}
        imageUri={item.imageUri}
        imageUri2={item.imageUri2}
      />
    </Pressable>
  )

  const bottomTabHeight = useBottomTabBarHeight()


  if(!fontsLoaded) {
    return <View></View>
  }
  else {
    return (
      <View style={styles.main}>
        <FlatList
          data={wishList}
          renderItem={renderItem}
          contentContainerStyle={styles.home}
          ListHeaderComponent={header}
          ListFooterComponent={<View style={{height: bottomTabHeight }}></View>}
          ItemSeparatorComponent={separator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  home: {
    margin: "2.5%",
    display: "flex"
  },
  headerText: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 36,
    width: "100%", 
    marginLeft: "2.5%"
  },
})
