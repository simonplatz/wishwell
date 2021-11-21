import React, {useState, useRef} from 'react';
import { Modal, StyleSheet, TextInput, View, Pressable, Text } from 'react-native';
import { useFonts, OpenSans_600SemiBold, OpenSans_400Regular } from "@expo-google-fonts/open-sans"
import { subHeader, buttons} from "../styleobject/Objects.js"
import generateBoxShadowStyle from "../tools/dropShadow.js"
import {card} from "../styleobject/CardStyle.js"
import {textInput} from "../styleobject/Objects.js"


export default function AddWishlistModal(props) {
  let [fontsLoaded] = useFonts({OpenSans_600SemiBold, OpenSans_400Regular, });

  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  const [title, setTitle] = useState('')
  const [focus, setFocus] = useState(false)
  const customStyle = focus ? styles.focused : {}

  const fieldRef = useRef(null)

  async function submitNewlist() {
    console.log("submitting " + props.userid + " " + title)
    fetch('https://pratgen.dk/wishwell/createWishlist/', {
      body: JSON.stringify({
        userid: props.userid,
        name: title
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
  }

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
              onChangeText={(value) => {console.log (value); setTitle(value)}}
              onFocus={() => setFocus(true)}
              onBlur={() => { 
                console.log("blurring") 
                setFocus(false)}}
            />
            <View
              style={styles.buttonContainer}
            >
              <Pressable
                style={styles.contrastButton}
                onPress={() => props.setModalVisible(false)}
              >
                <Text 
                  style={styles.contrastButtonText}
                >{'Cancel'}</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => {
                  submitNewlist()
                  props.setModalVisible(false)
                }}
              >
                <Text 
                  style={styles.buttonText}
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
  ...buttons,
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
  focused: {
    borderColor: '#35a761',
  },
})
