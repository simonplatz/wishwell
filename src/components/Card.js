import React from "react"
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, OpenSans_700Bold, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans"

export default function Card(props) {
  let [fontsLoaded] = useFonts({OpenSans_700Bold, OpenSans_600SemiBold });

  if (!fontsLoaded) {
    return (<View></View>)
  }
  else {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={require('../../assets/img/img1.jpg')} />
        <View style={styles.textbox}>
          <Text style={styles.text}>
            {props.title}
          </Text>
          <Text style={styles.subtext}>
            {props.subtitle}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBEBEB",
    width: "90%",
    display: "flex",
    borderRadius: 4, 
    marginTop: 5,
    overflow: 'hidden'
  }, 
  textbox: {
    margin: 15,
    marginLeft: 20
  },
  text: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 24,
  },
  subtext: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 14
  },
  image: {
    width: '100%',
    height: 225,
    resizeMode: 'cover',
    backgroundColor: '#fff'
  }
})