import React from "react"
import { StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import generateBoxShadowStyle from "../tools/dropShadow.js"
import {card} from "../styleobject/CardStyle.js"

export default function SuggestionCard(props) {
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  return (
    <View style={[styles.card, styles.boxShadow]}>
      <Image style={styles.image} source={props.imageUri} />
      <View style={styles.titlePriceBox}>
        <View style={styles.text}>
          <Text style={styles.text}>
            {props.title}
          </Text>
          <Text style={styles.subtext}>
              {props.subtitle}
          </Text>
        </View>
        <FontAwesomeIcon 
          icon={faPlus}
          size={24}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ...card
})
