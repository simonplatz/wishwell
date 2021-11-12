import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { scrollEnv, header as headerStyle, subHeader} from "../styleobject/Text.js"
import {card} from "../styleobject/CardStyle.js"
import { useFonts, OpenSans_700Bold, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans"
import { LoremIpsum } from "lorem-ipsum";

import generateBoxShadowStyle from "../tools/dropShadow.js"

const lorem = new LoremIpsum({
 sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
  }
)

const data = [
  {key: '10', name: "Kettle", price: '1299', manufacturer: 'Chemex', description: lorem.generateParagraphs(2)},
  {key: '11', name: 'Coffee', price: '100', manufacturer: 'BestCoffee', description: lorem.generateParagraphs(2)},
  {key: '12', name: 'Espresso Machine', price: '3899', manufacturer: 'Rancilio', description: lorem.generateParagraphs(2)},
  {key: '13', name: 'Tamper', price: '400', manufacturer: 'Joe Frex', description: lorem.generateParagraphs(2)}
]

export default Wish = ({route, navigation}) => {
  let [fontsLoaded] = useFonts({OpenSans_700Bold, OpenSans_600SemiBold });


  const wish = data.find(item => item.key == route.params.key)
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);
  
  useEffect(() => {navigation.setOptions({ title: wish.name})}, []);

  if(!fontsLoaded) {
    return (<View></View>)
  } else {
    return (
      <View style={{flex: 1}}>
        <View style={[styles.buyButton, styles.boxShadow]}>
          <Text style={styles.colorHeader}>
              Køb
          </Text>
        </View>
        <ScrollView
          style={styles.scrollEnv}
        >
          <View
          >
            <Text style={styles.headerText}>
              {wish.name} 
            </Text>
            <View 
            >
              <Image 
                style={styles.image}
                source={require('../../assets/img/img1.jpg')} 
              /> 
            </View>
            <View style={styles.textContainer}>
              <View style={styles.priceManufacturer}>
                <Text style={styles.manufacture}>
                  {wish.manufacturer}
                </Text>
                <Text style={styles.subHeader}>
                  {wish.price} kr 
                </Text>
              </View>
              <Text style={styles.textBox}>
                {wish.description}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...headerStyle,
  ...scrollEnv,
  ...card,
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  buyButton: {
    position: "absolute",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: '70%',
    borderRadius: 4,
    bottom: 10,
    left: '15%',
    height: 55,
    backgroundColor: "#3BBA6C",
    zIndex: 2
  },
  subHeader: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 26
  },
  colorHeader: {
    ...subHeader.subHeader,
    fontFamily: "OpenSans_600SemiBold",
    margin: 0,
    textAlign: "center",
    color: "#F9F9F9"
  },
  manufacture: {
    margin: 0,
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 26
  },
  textContainer: {
    margin: '3%',
    marginBottom: 100
  },
  textBox: {
    margin: 10,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 16
  },
  priceManufacturer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  }
})
