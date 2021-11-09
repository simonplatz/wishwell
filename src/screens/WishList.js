import React, { useState, useRef, useEffect } from 'react';
import { Animated, Pressable, StyleSheet, FlatList, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

import Card from '../components/Card.js'
import AddButton from "../components/AddButton.js"
import SuggestionCard from "../components/SuggestionCard.js"
import generateBoxShadowStyle from "../tools/dropShadow.js"

const data = [
  { key: '0', wishes: [
    {key: '10', name: "Kettle", price: '1299', manufacturer: 'Chemex'},
    {key: '11', name: 'Coffee', price: '100', manufacturer: 'BestCoffee'},
    {key: '12', name: 'Espresso Machine', price: '3899', manufacturer: 'Rancilio'},
    {key: '13', name: 'Tamper', price: '400', manufacturer: 'Joe Frex'}
  ]},
  { key: '2'},
  { key: '3'},
  { key: '4'}
]

const suggestionData = [
  {key: '1231j' , name: "Filters", manufacturer: "Chemex"},
  {key: '123123', name: "Scale", manufacturer: "Acacia"},
  {key: '12312313', name: "Espresso Cup", manufacturer: "Bodum"}
]

function header(route) {
  return (
    <View >
      <Text style={styles.headerText} >
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


function footer(navigation) {
  const renderItem = ({ item, index }) => (
    <View
      key={index}
      style={{ height: 400, width: 320}}
    >
      <SuggestionCard
        title={item.name}
        subtitle={item.manufacturer}
        imageUri={require("../../assets/img/img1.jpg")}
      /> 
    </View>
  )

  return (
    <View style={{height: 430}}>
      <Pressable
          onPress={() => {
            navigation.navigate('AddWish')
          }}
          >
          <AddButton/>
        </Pressable>
      <View style={{flexDirection: "row"}}>
        <FlatList
          horizontal
          data={suggestionData}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

export default NiceView = ({route, navigation}) => {
  const wishlist = data.find(item => item.key == route.params.id) 

  const [showShare, setShowShare] = useState(true)

  function scrollOn(event) {
    event = event.nativeEvent
    if (event.contentSize.height - 500 >
      (event.contentOffset.y + event.layoutMeasurement.height) - 400
    ) {
      setShowShare(true)
    } else {
      setShowShare(false)
    }
  }

  const renderItem = ({ item }) => (
    <Pressable>
      <Card
        title={item.name}
        price={item.price}
        subtitle={item.manufacturer}
        imageUri={require('../../assets/img/img1.jpg')}
      />
    </Pressable>
  )

  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  return (
    <View>
      <Pressable style={[styles.floatingShare, styles.boxShadow]}
          onPress={() => {
            navigation.navigate('Share')
          }}
          >
          <FontAwesomeIcon 
            icon={faShare}
            style={styles.shareIcon}
            size={30}
          />
        </Pressable>
      <FlatList
        data={wishlist.wishes}
        renderItem={renderItem}
        contentContainerStyle={styles.home}
        ListHeaderComponent={header(route)}
        ListFooterComponent={footer(navigation)}
        ItemSeparatorComponent={separator}
        onScroll={scrollOn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home : {
    margin: "1%",
    marginTop: "2%"
  },
  headerText: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 36,
    width: "100%", 
    marginLeft: "2.5%"
  },
  floatingShare: {
    position: "absolute",
    right: 25,
    bottom: 25,
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#ebebeb",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  hiddenShare: {
    display: 'none',
    backgroundColor: "#f00"
  },
  shareIcon: {
  color: "#0E1D31"
  },
  boxShadow: {}
})
