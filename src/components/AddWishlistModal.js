import React, {useState, useRef} from 'react';
import { Modal, StyleSheet, TextInput, View, Pressable, Text } from 'react-native';
import { useFonts, OpenSans_600SemiBold, OpenSans_400Regular } from "@expo-google-fonts/open-sans"
import { subHeader } from "../styleobject/Text.js"
import generateBoxShadowStyle from "../tools/dropShadow.js"
import {card} from "../styleobject/CardStyle.js"
import {textInput} from "../styleobject/Text.js"


export default function AddWishlistModal(props) {
  let [fontsLoaded] = useFonts({OpenSans_600SemiBold, OpenSans_400Regular, });


  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);



  const [focus, setFocus] = useState(false)
  const customStyle = focus ? styles.focused : {}

  const fieldRef = useRef(null)

  if(!fontsLoaded) {
    return <View></View>
  } else {
  return (
    <Modal
      visible={props.modalVisible}
      animationType={"fade"}
      transparent={true}
    >
      <Pressable
        style={{flex: 1}}
        onPress={() => {
          console.log("pressed")
          fieldRef.current.blur()
          props.setModalVisible(false)
        }}
      >
        <View
          style={styles.modalContainer}
        >
          <View style={[
            styles.card, 
            styles.boxShadow, 
            styles.cardContent,
            {backgroundColor:"#fff"}
          ]}
          >
            <Text
              style={styles.head}
            >
              {"Tilføj ønskeliste"}
            </Text>
            <TextInput
              placeholder={"My wishlist"}
              style={[styles.input, customStyle]}
              ref={fieldRef}
              onFocus={() => setFocus(true)}
              onBlur={() => { 
                console.log("blurring") 
                setFocus(false)}}
            />
            <View
              style={styles.buttonContainer}
            >
              <Pressable
                style={[styles.button, {backgroundColor: '#fff', borderColor: '#dfdfdf', borderWidth: 2}]}
                onPress={() => props.setModalVisible(false)}
              >
                <Text 
                  style={[styles.text, {color: "#0E1D31"}]}
                >{'Cancel'}</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => props.setModalVisible(false)}
              >
                <Text 
                  style={styles.text}
                >{'Add'}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  )}
}

const styles = StyleSheet.create({
  ...card,
  ...textInput,
  modal: {
    width: 100,
    height: 100,
  },
  head: {
    ...subHeader.subHeader,
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 15,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  cardContent: {
    padding: 25,
    width: '90%', 
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    width: '100%'
  },
  button: {
    width: '45%',
    borderRadius: 4,
    borderWidth: 0,
    backgroundColor: '#35a761',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  text: {
    fontFamily: 'OpenSans_600SemiBold',
    color: '#fff'
  },
  focused: {
    borderColor: '#35a761',
  },
})
