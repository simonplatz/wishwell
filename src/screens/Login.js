import React, { useState, useContext } from 'react';
import { Button, StyleSheet, View, Image, Pressable, Text, ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LoginContext } from '../contexts/LoginContext.js'
import { textInput, buttons } from '../styleobject/Objects.js'

export default Login = ({navigation}) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("")

  const context = useContext(LoginContext)

  return (
    <View style={style.container}>
    <ScrollView
      style={style.scrollEnv}
    >
      <View style={style.space}/>
      <Image 
        style={style.image}
        source={require("../../assets/img/wish.png")} 
      />
      <View style={style.body}>
        <TextInput 
          placeholder= "Email" 
          style={style.input}
          emailValue={emailValue}
          onChangeText={(EmailValue) => setEmailValue(EmailValue)}/>
        <View style={style.space}/>
        <TextInput
          placeholder= "Password" 
          style={style.input}
          passwordValue={passwordValue} 
          onChangeText={(PasswordValue) => setPasswordValue(PasswordValue)}/>
      </View>
      <View style={{flexDirection: "row", alignSelf: "center" }}>
        <Button style={style.button} title="Cancel" color="#3BBA6C"/>
        <View style={style.space}/>
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
      <View style={style.space}/>
      <View style={style.footer}>
        <Pressable
          style={style.button}
        >
          <Text style={style.buttonText}>{"Sign up"}</Text>
        </Pressable>
      </View>
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
  image:{
    width: '100%',
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: '#000'

  },
});
