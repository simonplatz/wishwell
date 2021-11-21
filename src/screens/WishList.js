import React, { useContext, useEffect, useState, useRef } from 'react';
import { Animated, Pressable, StyleSheet, FlatList, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { header as headerStyle, scrollEnv} from "../styleobject/Objects.js"

import { LoginContext } from '../contexts/LoginContext.js'
import { UpdateContext } from '../contexts/UpdateContext.js'

import Card from '../components/Card.js'
import AddButton from "../components/AddButton.js"
import SuggestionCard from "../components/SuggestionCard.js"
import generateBoxShadowStyle from "../tools/dropShadow.js"

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

export default WishList = ({navigation, route}) => {
  const loginContext = useContext(LoginContext)
  const updateContext = useContext(UpdateContext)

  const [refreshing, setRefreshing] = useState(false)
  const [showShare, setShowShare] = useState(true)
  const [wishlist, setWishlist] = useState([])

  console.log("wish id " + route.params.id)

  function loadWishes() {
    setRefreshing(true)
    fetch('https://pratgen.dk/wishwell/getwishes/' + encodeURI(route.params.id))
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setWishlist(data)
        setRefreshing(false)
      })
  }



  function footer() {
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
            navigation.navigate('Add Wish', {
              wishlistid: route.params.id
            })
          }}
        >
          <AddButton />
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

  useEffect(() => {
    console.log("wishlist id" + route.params.id)
    loadWishes()
  }, [])

  useEffect(() => {
    console.log("wishlist updated context" + route.params.id)
    loadWishes()
  }, [updateContext.update.updateWishlist])

  const sharedState = route.params.shared != undefined ? route.params.shared : false

  function scrollOn(event) {
    event = event.nativeEvent
    if ((event.contentSize.height - 100 >
      (event.contentOffset.y + event.layoutMeasurement.height) && !sharedState)
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
            id: item.wishid,
            shared: sharedState
          }
        )
      }}
    >
      <Card
        title={item.name}
        price={item.price}
        subtitle={item.manufacturer}
        imageUri={ {uri: item.picturelink}}
      />
    </Pressable>
  )

  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  const fadeShare = useRef(new Animated.Value(sharedState ? 0 : 1)).current

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
            if(showShare && loginContext.userState.loggedIn) {
              navigation.navigate('Share')
            } else if (showShare && !loginContext.userState.loggedIn) {
              navigation.navigate('Login')
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
        data={wishlist}
        renderItem={renderItem}
        contentContainerStyle={styles.scrollEnv}
        ListHeaderComponent={header(route)}
        ListFooterComponent={footer}
        ItemSeparatorComponent={separator}
        scrollEventThrottle={16}
        refreshing={refreshing}
        onRefresh={loadWishes}
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
