import React from "react"
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import generateBoxShadowStyle from "../tools/dropShadow.js"

export default function AddButton() {
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);
  return (
    <View style={[styles.card, styles.boxShadow]}>
      <FontAwesomeIcon 
        icon={faPlus}
        size={36}
        style={styles.plus}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBEBEB",
    width: "95%",
    marginLeft: "2.5%",
    display: "flex",
    borderRadius: 4, 
    overflow: 'hidden',
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    marginTop: 15,
    marginBottom: 25,
  }, 
  boxShadow: {},
  plus: {
    color: "#0E1D31"
  }
})
