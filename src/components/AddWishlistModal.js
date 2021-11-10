import React from 'react';
import { Modal, StyleSheet, Pressable, Text, View } from 'react-native';
import { useFonts, OpenSans_700Bold } from "@expo-google-fonts/open-sans"

export default function AddWishlistModal(props) {
  return (
    <Modal
      visible={props.modalVisible != undefined ? props.modalVisible : false}
      transparent={true}
    >
      <View
        style={styles.modalContainer}
      >
        <View style={{
            width: 300,
            height: 300,
            backgroundColor: '#f00'
          }}>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    width: 100,
    height: 100,
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
