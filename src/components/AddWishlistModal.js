import React from 'react';
import { Modal, StyleSheet, Button, TextInput, View, Pressable, Text } from 'react-native';
import { header as headerStyle } from "../styleobject/Text.js"
import generateBoxShadowStyle from "../tools/dropShadow.js"
import {card} from "../styleobject/CardStyle.js"

export default function AddWishlistModal(props) {
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);


  return (
    <Modal
      visible={props.modalVisible}
      transparent={true}
    >
      <View
        style={styles.modalContainer}
      >
        <View style={[
          styles.card, 
          styles.boxShadow, 
          styles.cardContent
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder={"Wishlist title"}
          />
          <Pressable
            style={styles.button}
            onPress={() => props.setModalVisible(false)}
          >
            <Text>{'Cancel'}</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => props.setModalVisible(false)}
          >
            <Text>{'Add'}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  ...card,
  modal: {
    width: 100,
    height: 100,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContent: {
    padding: 10,
    width: '95%', 
    display: "flex",
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  input: {
    ...headerStyle.headerText    
  },
  button: {
    width: 100,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#35a761',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
})
