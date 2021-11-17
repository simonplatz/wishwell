import React, { useState, useContext } from 'react';
import { StyleSheet, View, Image, Pressable, Text, ScrollView} from 'react-native';
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
            source={require("../../assets/wishlogo/1.5x/logo_background_hdpi.png")} 
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
            style={({pressed}) =>
              [style.contrastButton, 
              {width: '48%'},
              pressed ? style.pressedContrastButton : {}
            ]}
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
              context.toggleLogin(true)
              navigation.pop()
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
