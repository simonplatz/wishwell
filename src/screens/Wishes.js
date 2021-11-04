import React from 'react';
import { Pressable, StyleSheet, FlatList, Text, View } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import Card from "../components/Card.js";

const data = [
  { key: '0', wishes: [
    {key: '0', name: "Kettle", price: '1299'},
    {key: '1', name: 'Coffee', price: '100'},
    {key: '2', name: 'Espresso Machine', price: '3899'},
    {key: '3', name: 'Tamper', price: '400'}
  ]},
  { key: '1'},
  { key: '2'},
  { key: '3'},
  { key: '4'}
]

function header(route) {
  return (
    <View >
      <Text style={style.headerText} >
        {route.params.title}
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

export default NiceView = ({route}) => {
  const bottomTabHeight = useBottomTabBarHeight()
  const wishlist = data.find(item => item.key == route.params.id) 
  console.log(wishlist.wishes)

  const renderItem = ({ item }) => (
    <Pressable>
      <Card
        title={item.name}
        subtitle={item.price}
        imageUri={require('../../assets/img/img1.jpg')}
      />
    </Pressable>
  )

  return (
    <View>
      <FlatList
        data={wishlist.wishes}
        renderItem={renderItem}
        contentContainerStyle={style.home}
        ListHeaderComponent={header(route)}
        ListFooterComponent={<View style={{height: bottomTabHeight }}></View>}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
}

const style = StyleSheet.create({
  home : {
    margin: "5%",
  },
  headerText: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 36,
    width: "100%", 
  }
})
