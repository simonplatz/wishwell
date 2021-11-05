import React from "react"
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, OpenSans_700Bold, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans"
import generateBoxShadowStyle from "../tools/dropShadow.js"

export default function Card(props) {
  let [fontsLoaded] = useFonts({OpenSans_700Bold, OpenSans_600SemiBold });

  let image
  if (props.imageUri2 == undefined) {
    image = <Image style={styles.image} source={props.imageUri} />
  } else {
    image = <View style={styles.imageContainer}> 
        <Image style={styles.imageMatrix} source={props.imageUri} /> 
        <Image style={styles.imageMatrix} source={props.imageUri2} /> 
      </View>
  }
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  let text
  if (props.title != undefined 
    && props.subtitle != undefined
    && props.price != undefined
  ) {
    text = 
    <View style={styles.titlePriceBox}>
      <View>
        <Text style={styles.text}>
          {props.title}
        </Text>
        <Text style={styles.subtext}>
          {props.subtitle}
        </Text>
      </View>
      <Text style={styles.text}>
        {props.price}
      </Text>
    </View>
  } else if (props.title != undefined && props.price != undefined) {
    text = <View style={styles.titlePriceBox}>
          <Text style={styles.text}>
            {props.title}
          </Text>
          <Text style={styles.text}>
            {props.price}
          </Text>
        </View>
  } else if (props.title != undefined 
      && props.subtitle != undefined
  ) {
    text = <View style={styles.textbox}>
          <Text style={styles.text}>
            {props.title}
          </Text>
          <Text style={styles.subtext}>
            {props.subtitle}
          </Text>
        </View>
  } else {

  }

  if (!fontsLoaded) {
    return (<View></View>)
  }
  else {
    return (
      <View style={[styles.card, styles.boxShadow]}>
        {image}
        {text}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBEBEB",
    width: "95%",
    marginLeft: "2.5%",
    display: "flex",
    borderRadius: 4, 
    overflow: 'hidden',
  }, 
  imageContainer: {
    display: 'flex',
    flexDirection: 'row'
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
    height: 200,
    resizeMode: 'cover'
  },
  imageMatrix: {
    width: '50%',
    height: 225,
    resizeMode: 'cover',
  }, boxShadow: {},
  titlePriceBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    marginLeft: 20
  }
})
