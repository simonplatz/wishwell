import React from "react"
import { StyleSheet, TextInput, View, Image } from 'react-native';

const TextBox = ({title}) => {
    let text = 
    <View>
        <TextInput style = {StyleText.text}
            placeholder = {title}
        />
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
        paddingBottom: 15,
      },
      text:{
        padding: 10,
        height: 40,
        fontFamily: "OpenSans_700Bold",
        color: "#0E1D31",
        borderColor: "#3BBA6C",
        borderRadius: 10,
        borderWidth: 1,
      }
    });

export default TextBox