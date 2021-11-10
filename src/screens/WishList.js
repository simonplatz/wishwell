import React, { useState, useRef } from 'react';
import { Animated, Pressable, StyleSheet, FlatList, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { header as headerStyle, scrollEnv} from "../styleobject/Text.js"

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


export default WishList = ({navigation, route}) => {
  const wishlist = data.find(item => item.key == route.params.id) 


  const [showShare, setShowShare] = useState(true)

  function scrollOn(event) {
    event = event.nativeEvent
    if (event.contentSize.height - 100 >
      (event.contentOffset.y + event.layoutMeasurement.height)
    ) {
      fadeIn()
      setShowShare(true)
    } else {
      fadeOut()
      setShowShare(false)
    }
  }

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("Wish",
          {
            key: item.key
          }
        )
      }}
    >
      <Card
        title={item.name}
        price={item.price}
        subtitle={item.manufacturer}
        imageUri={require('../../assets/img/img1.jpg')}
      />
    </Pressable>
  )

  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  const fadeShare = useRef(new Animated.Value(1)).current

  const fadeIn = () => {
    Animated.timing(fadeShare, {
      toValue: 1, 
      duration: 250,
      useNativeDriver: true
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(fadeShare, {
      toValue: 0, 
      duration: 250,
      useNativeDriver: true
    }).start()
  }

  return (
    <View>
      <Animated.View
        style={[styles.floatingShare, styles.boxShadow, {
          opacity: fadeShare 
        }]}
      >
        <Pressable 
          onPress={() => {
            if(showShare) {
              navigation.navigate('Share')
            }
          }}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: pressed ? 
               '#ababab' : '#ebebeb',
            },
          ]}
        >
          <FontAwesomeIcon 
            icon={faShare}
            style={styles.shareIcon}
            size={30}
          />
        </Pressable>
      </Animated.View>
      <FlatList
        data={wishlist.wishes}
        renderItem={renderItem}
        contentContainerStyle={styles.scrollEnv}
        ListHeaderComponent={header(route)}
        ListFooterComponent={footer(navigation)}
        ItemSeparatorComponent={separator}
        scrollEventThrottle={16}
        onScroll={scrollOn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ...headerStyle,
  ...scrollEnv,
  floatingShare: {
    position: "absolute",
    right: 25,
    bottom: 25,
    width: 65,
    height: 65,
    borderRadius: 50,
    zIndex: 2,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%',
    borderRadius: 50
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
