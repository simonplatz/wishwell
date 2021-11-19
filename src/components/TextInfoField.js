import React from 'react'
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native'

import {textInput} from '../styleobject/Objects.js'

// uses userdata to set the title
export default function Information(props) {

  function changed(e) {
    props.changeText(e, props.info)
  }

  return (
    <Pressable
      onPress={() => {
        if(props.onPress != undefined) {
          props.onPress(true)
        }
      }}
    >
      <View style={style.informationContainer}>
        <Text style={style.informationText}>{props.info}</Text>
        <TextInput 
          style={style.input}
          onChangeText={changed}
          selectTextOnFocus={props.selectTextOnFocus != undefined ? props.selectTextOnFocus : false}
          editable={props.editable != undefined ? props.editable : true}
          onPressOut={() => {
            if(props.onPress != undefined) {
              props.onPress(true)
            }
          }}
          secureTextEntry={props.secure != undefined ? props.secure : false}
          multiline={props.multiline != undefined ? props.multiline : false}
        >
          {props.initialValue}
        </TextInput>
      </View>
    </Pressable>
  )
}

const style = StyleSheet.create({
  ...textInput,
  informationContainer:{
    width: "100%",
    marginBottom: 15,
  },
  informationText: {
    fontFamily: 'OpenSans_600SemiBold',
    marginBottom: 4,
    marginLeft: 5
  },
})
