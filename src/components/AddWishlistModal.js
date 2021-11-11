import React, { useState } from 'react';
import { Modal, StyleSheet, Button, TextInput, View } from 'react-native';
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans"
import { header as headerStyle, scrollEnv} from "../styleobject/Text.js"
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
          <Button 
            style={styles.button}
            title={"Cancel"}
            onPress={() => props.setModalVisible(false)}
          />
          <Button 
            style={styles.button}
            title={"Add"}
            onPress={() => props.setModalVisible(true)}
          />
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
    height: 100,
    display: "flex",
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  input: {
    ...headerStyle.headerText    
  },
  button: {
    width: '100%'
  }
})
