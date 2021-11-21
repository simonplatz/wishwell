import React, {useState, useContext, useEffect } from 'react';
import { StyleSheet, FlatList, Pressable, Text, View } from 'react-native';
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans"
import { header as headerStyle, scrollEnv} from "../styleobject/Objects.js"
import { LoginContext } from '../contexts/LoginContext.js'

import AddWishlistModal from "../components/AddWishlistModal.js"
import AddButton from "../components/AddButton.js"
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

  let context = useContext(LoginContext)
  let [wishlists, setWishlists] = useState([])
  let [refreshing, setRefreshing] = useState(false)

  function loadList() {
    if (context.userState.loggedIn) {
    setRefreshing(true)
      let newList = [];
      fetch('https://pratgen.dk/wishwell/getwishlists/' + context.userState.userId)
        .then(response => response.json())
        .then(data => {
          for(const wishlist of data){
            fetch('https://pratgen.dk/wishwell/getwishes/' + wishlist.wishlistid)
              .then(response => response.json())
              .then(data => {
                for (const wish of data) {
                  if (wishlist.imageUri == undefined) {
                    wishlist.imageUri = wish.picturelink 
                  } else if (wishlist.imageUri2 == undefined) {
                    wishlist.imageUri2 = wish.picturelink
                  }
                }
                wishlist.numGifts = data.length != undefined ? data.length : 0
                newList.push(wishlist)
              })
          }
          setRefreshing(false)
          console.log(newList)
          return newList
        }).then((list) => setWishlists(list))
    }
  }

  useEffect(() => {
    console.log("loading " + JSON.stringify(context.userState))
    if (!context.userState.loggedIn) {
      setWishlists([])
    } else {
      loadList()
    }
  }, [context.userState])

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate('Wishes', 
          {
            id: item.wishlistid,
            title: item.name 
          }
        )
      }}
    >
      <Card 
        title={item.name}
        subtitle={item.numGifts + " wishes"}
        imageUri={ item.imageUri != undefined ? {uri: item.imageUri} : require('../../assets/img/placeholder.png')}
        imageUri2={item.imageUri2 != undefined ? {uri: item.imageUri2} : require('../../assets/img/placeholder.png')}
      />
    </Pressable>
  )

  const [modalVisible, setModalVisible] = useState(false)

  if(!fontsLoaded) {
    return <View></View>
  }
  else {
    return (
      <View style={styles.main}>
        <FlatList
          data={wishlists}
          renderItem={renderItem}
          contentContainerStyle={styles.scrollEnv}
          ListHeaderComponent={header}
          ListFooterComponent={
            <Pressable
              onPress={() => setModalVisible(true)}
            >
              <AddButton/>
            </Pressable>
          }
          ItemSeparatorComponent={separator}
          keyExtractor={(item) => item.id}
          refreshing={refreshing}
          onRefresh={() => loadList()}
        />
        <AddWishlistModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          userid={context.userState.userId}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...headerStyle,
  ...scrollEnv,
  main: {
    width: '100%',
  },
})
