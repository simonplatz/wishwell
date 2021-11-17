import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, ToastAndroid, Pressable} from 'react-native';
import Information from '../components/TextInfoField.js'
import generateBoxShadowStyle from "../tools/dropShadow.js"
import { buttons, floatingButton } from '../styleobject/Objects.js'


export default function AddWish() {
  const [inputState, setInputState] = useState({})
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  function inputChanged(event, property) {
    property = property.toLowerCase()
    inputState[property] = event
    console.log(inputState)
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
              />
            )})
        }

      </ScrollView>
      <Pressable
        style={({pressed}) => [
          styles.button, 
          styles.boxShadow,
          styles.floatingButton,
          pressed ? styles.pressedButton : {}
        ]}
        onPress={() => ToastAndroid.show("Wish added!", 10)}
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
  'URL'
];
