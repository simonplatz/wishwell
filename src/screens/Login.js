import React, { useState, useContext } from 'react';
import { StyleSheet, View, Image, Pressable, Text, ScrollView} from 'react-native';

import {storeObjectData} from '../tools/Storage.js'

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
  }

  async function login() {
    fetch('https://pratgen.dk/wishwell/getUser/' + encodeURI(input.email))
      .then(response => response.json())
      .then(data => {
        const user = data[0]
        const userState = {
          name: user.name,
          userId: user.userid,
          dateOfBirth: user.dataofbirth,
          loggedIn: true,
          email: input.email
        }
        context.setUserState(userState)
        console.log("saving")
        console.log(userState)
        storeObjectData("userState", userState)
      })
      .catch(err => console.log(err))
  }

  return (
    <View style={style.container}>
      <ScrollView
        style={style.scrollEnv}
      >
        <View style={style.imageContainer}>
          <Image 
            style={style.image}
            source={require("../../assets/wishlogo/1.5x/logo_background_hdpi.png")} 
          />
        </View>
        <Information
          info={"Email"}
          initialValue={input.email}
          autoComplete={'email'}
          keyboardType={"email-address"}
          autoCapitalize={'none'}
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
            style={({pressed}) =>
              [style.contrastButton, 
              {width: '48%'},
              pressed ? style.pressedContrastButton : {}
            ]}
            onPress={() => navigation.pop()}
          >
            <Text style={style.contrastButtonText}>{"Cancel"}</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => [
              style.button, 
              {width: '48%'},
              pressed ? style.pressedButton : {}
            ]}
            onPress={() => {
              login().then((data) => {
                  navigation.pop()
                }
              )
            }}
          >
            <Text style={style.buttonText}>{"Login"}</Text>
          </Pressable>
        </View>
        <View style={style.divider}/>
        <Pressable
          style={({pressed}) =>
            [style.button, 
            {width: '100%'},
            pressed ? style.pressedButton : {}
          ]}
          onPress={() => navigation.navigate("Sign Up")}
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
    marginBottom: "15%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: '100%',
    height: 170,
    resizeMode: 'center',
    borderRadius: 5,
  },
});
