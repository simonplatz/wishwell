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

        <View style={{display: 'flex', flexDirection: "row", alignSelf: "center", justifyContent: 'space-between' }}>
          <Pressable
            style={[style.contrastButton, {width: '48%'}]}
          >
            <Text style={style.contrastButtonText}>{"Cancel"}</Text>
          </Pressable>
          <Pressable
            style={[style.button, {width: '48%'}]}
            onPress={() => {
              context.toggleLogin(true)
              navigation.pop()
            }}
          >
            <Text style={style.buttonText}>{"Login"}</Text>
          </Pressable>
        </View>
        <View style={style.divider}/>
        <Pressable
          style={[style.button, {width: '100%'}]}
        >
          <Text style={style.buttonText}>{"Sign up"}</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  scrollEnv: {
    padding: '5%',
    height: '100%'
  },
  ...textInput,
  ...buttons,
  container: {
    flex: 1,
    flexDirection: 'column'
  },  
  divider: {
    width: '100%',
    height: 1.5,
    backgroundColor: '#dfdfdf',
    marginTop: 20,
    marginBottom: 20
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    marginTop: "20%",
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: '100%',
    height: 90,
    resizeMode: 'contain',
  },
});
