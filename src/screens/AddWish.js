import React, {useState, useContext} from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable} from 'react-native';
import Information from '../components/TextInfoField.js'
import generateBoxShadowStyle from "../tools/dropShadow.js"
import { buttons, floatingButton } from '../styleobject/Objects.js'

import { UpdateContext } from '../contexts/UpdateContext.js'

export default function AddWish({navigation, route}) {
  const [inputState, setInputState] = useState({})
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  const updateContext = useContext(UpdateContext)

  function inputChanged(event, property) {
    property = property.toLowerCase()
    inputState[property] = event
    console.log(inputState)
  }

  const wish = route.params.wish 

  async function submitWish(wishlistid) {
    fetch('https://pratgen.dk/wishwell/createwish/', {
      method: 'POST',
      body: JSON.stringify({
        name: inputState.name,
        price: inputState.price,
        link: inputState.link,
        manufacturer: inputState.manufacturer,
        description : inputState.description,
        picturelink: inputState["picture link"],
        wishlistid:  wishlistid
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async function submitWishChange() {
    fetch('https://pratgen.dk/wishwell/updateWish/', {
      method: 'PUT',
      body: JSON.stringify({
        name: inputState.name != undefined ? inputState.name : wish.name,
        price: inputState.price != undefined ? inputState.price : wish.price,
        link: inputState.link != undefined ? inputState.link : wish.link,
        manufacturer: inputState.manufacturer != undefined ? inputState.manufacturer : wish.manufacturer,
        description : inputState.description != undefined ? inputState.description : wish.description,
        picturelink: inputState["picture link"] != undefined ? inputState["picture link"] : wish.picturelink,
        wishid: wish.id
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
                keyboardType={item == "Price" ? 'numeric' : "default"}
                initialValue={wish != undefined ? wish[dataBaseRep[index]] : '' }
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
          if (wish == undefined) {
            submitWish(route.params.wishlistid).then(() => {
              updateContext.setUpdate({updateContext, ...{update : !updateContext.update}})
              navigation.pop()
            })
          } else {
            submitWishChange().then(() => {
              updateContext.setUpdate({updateContext, ...{update : !updateContext.update}})
              navigation.pop()
            })
          }
        }}
      >
        <Text style={styles.buttonText}>
          { wish == undefined ? "Add wish to wishlist" : "Apply changes"} 
        </Text>
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
  'Link',
  'Manufacturer',
  'Description',
  'Picture link'
];

const dataBaseRep = [
  'name',
  'price',
  'size',
  'gifttype',
  'link',
  'manufacturer',
  'description',
  'picturelink'
]

