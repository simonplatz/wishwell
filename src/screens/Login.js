import React, { useState, useContext } from 'react';
import { Button, StyleSheet, View, Image, Pressable, Text, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Information from '../components/TextInfoField.js'

import { LoginContext } from '../contexts/LoginContext.js'

import { textInput, buttons } from '../styleobject/Objects.js'

export default Login = ({navigation}) => {
  const [input, setInput] = useState({
    email: "",
    password: ''
  });

  const context = useContext(LoginContext)


  function inputChanged(event, property) {
    property = property.toLowerCase()
    input[property] = event
    console.log(input)
  }

  return (
    <View style={style.container}>
      <ScrollView
        style={style.scrollEnv}
      >
        <View style={style.imageContainer}>
          <Image 
            style={style.image}
            source={require("../../assets/logo/3x/logoxxhdpi.png")} 
          />
        </View>
        
        <Information
          info={"Email"}
          initialValue={input.email}
          changeText={inputChanged}
        />

        <Information
          info={"Password"}
          initialValue={input.password}
          changeText={inputChanged}
          secure={true}
        />

        <View style={{flexDirection: "row", alignSelf: "center" }}>
          <Button style={style.button} title="Cancel" color="#3BBA6C"/>
          <Button 
            style={style.button} 
            title="Login" 
            color="#3BBA6C"
            onPress={() => {
              context.toggleLogin(true)
              navigation.pop()
            }}
          />
        </View>
        <Pressable
          style={style.button}
        >
          <Text style={style.buttonText}>{"Sign up"}</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  scrollEnv: {
    flex: 1,
    padding: '5%'
  },
  ...textInput,
  ...buttons,
  container: {
    flex: 1,
    flexDirection: 'column'
  },  
  imageContainer: {
    width: '100%',
    display: 'flex',
    marginTop: 60,
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: '70%',
    height: 70,
    resizeMode: 'contain',
  },
});
