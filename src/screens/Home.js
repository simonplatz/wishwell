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

  useEffect(() => {
    if (context.userState.loggedIn) {
      fetch('https://pratgen.dk/wishwell/getwishlists/' + context.userState.userId)
        .then(response => response.json())
        .then(data => {
          console.log("return lists")
          console.log(data)
          setWishlists(wishlists.concat([data[0]]))
        })
    }
  }, [context.userState.loggedIn])

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
        imageUri={item.imageUri}
        imageUri2={item.imageUri2}
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
        />
        <AddWishlistModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
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
