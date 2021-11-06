import React from "react"
import { StyleSheet, Text, View, Image } from 'react-native';

const TextBox = ({title}) => {
    let text = 
    <View>
        <Text style = {StyleText.text}>
            {title}
        </Text>
    </View>

    return (
    <View style={StyleText.container}>
        {text}
    </View>
    )
}

const StyleText = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 15,
      },
      text:{
        padding: 10,
        height: 40,
        fontFamily: "OpenSans_700Bold",
        color: "black",
        borderColor: "#3BBA6C",
        borderRadius: 10,
        borderWidth: 1,
      }
    });

export default TextBox