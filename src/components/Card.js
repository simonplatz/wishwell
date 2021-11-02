import React from "react"
import { StyleSheet, Text, View } from 'react-native';

export default function Card(props) {

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBEBEB",
    width: "90%",
    display: "flex",
    borderRadius: 4, 
    marginTop: 5
  }, 
  text: {
    fontFamily: "Open Sans",
    fontSize: 24
  }
})
