import React, { useState, useRef, useEffect } from 'react';
import { Animated, Pressable, StyleSheet, FlatList, Text, View, Image } from 'react-native';
import Card from "../components/Card.js"

function separator() {
  return (
    <View style={{height:10}}>
    </View>
  )
}

export default function SharedWithMe() {
  let wishList = []

    wishList.push({          
      id: 1,
      title: "Lone's wishlist",
      numGifts: 40,
      imageUri: require('../../assets/img/img3.jpg'),
      imageUri2: require('../../assets/img/img1.jpg')
    })
    wishList.push({
      id: 2,
      title: "Bjarne's amazing wishlist",
      numGifts: 5,
      imageUri: require('../../assets/img/img4.jpg'),
      imageUri2: require('../../assets/img/img2.jpg')
    })

  const renderItem = ({ item }) => (
      <Card 
        title={item.title}
        subtitle={item.numGifts + " wishes"}
        imageUri={item.imageUri}
        imageUri2={item.imageUri2}
      />
  )

  return (
    <View style={styles.main}>
      <FlatList
        data={wishList}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
})
