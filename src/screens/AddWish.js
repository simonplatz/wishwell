import React, {useState, useContext} from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, ToastAndroid, Pressable} from 'react-native';
import Information from '../components/TextInfoField.js'
import generateBoxShadowStyle from "../tools/dropShadow.js"
import { buttons, floatingButton } from '../styleobject/Objects.js'

import { UpdateContext } from '../contexts/UpdateContext.js'

export default function AddWish({navigation, route, props}) {
  const [inputState, setInputState] = useState({})
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  const updateContext = useContext(UpdateContext)

  function inputChanged(event, property) {
    property = property.toLowerCase()
    inputState[property] = event
    console.log(inputState)
  }

  async function submitWish(wishlistid) {
    fetch('https://pratgen.dk/wishwell/createwish/', {
      method: 'POST',
      body: JSON.stringify({
        name: inputState.name,
        price: inputState.price,
        link: inputState.url,
        manufacturer: inputState.manufacturer,
        description : inputState.description,
        picturelink: inputState.picturelink,
        wishlistid:  wishlistid
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollEnv}
      >
        {
          addWishData.map((item, index) => {
            return (
              <Information 
                key={index}
                info={item} 
                changeText={inputChanged} 
                multiline={item == "Description" ? true : false}
              />
            )})
        }
        <View 
          key={12312039123}
          style={{height: 50}}></View>
      </ScrollView>
      <Pressable
        style={({pressed}) => [
          styles.button, 
          styles.boxShadow,
          styles.floatingButton,
          pressed ? styles.pressedButton : {}
        ]}
        onPress={() => {
          submitWish(route.params.wishlistid).then(() => {
            updateContext.setUpdate({updateContext, ...{update: true}})
            navigation.pop()
          })
        }}
      >
        <Text style={styles.buttonText}>{"Add wish to wishlist"} </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  ...buttons,
  ...floatingButton,
  container: {
    paddingTop: 25,
    flex: 1,
    flexDirection: 'column',
  },
  scrollEnv: {
    padding: "5%",
  },
  boxShadow: {}
})

const addWishData = [
  'Name',
  'Price',
  'Size',
  'Gift type',
  'URL',
  'Manufacturer',
  'Description',
  'Picturelink'
];
