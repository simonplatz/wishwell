import React, { useState, useContext } from 'react';
import { Button, StyleSheet, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LoginContext } from '../contexts/LoginContext.js'

export default Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("")

  const context = useContext(LoginContext)

  return (
    <View style={style.container}>
      <View style={style.space}/>
      <Image 
        style={style.image}
        source={require("../../assets/wishwlll.png")} 
      />
      <View style={style.body}>
        <View style={style.space}/>
        <View style={style.space}/>
        <TextInput 
          placeholder= "Email" 
          emailValue={emailValue} style={style.text} 
          onChangeText={(EmailValue) => setEmailValue(EmailValue)}/>
        <View style={style.space}/>
        <TextInput
          placeholder= "Password" 
          passwordValue={passwordValue} style={style.text} 
          onChangeText={(PasswordValue) => setPasswordValue(PasswordValue)}/>
      </View>
      <View style={{flexDirection: "row", alignSelf: "center" }}>
        <Button style={style.button} title="Cancel" color="#3BBA6C"/>
        <View style={style.space}/>
        <Button 
          style={style.button} 
          title="Login" 
          color="#3BBA6C"
          onPress={() => {context.toggleLogin(true)}}
        />
      </View>
      <View style={style.space}/>
      <View style={style.footer}>
        <Button 
          title="Sign up" color="#3BBA6C"
        />
      </View>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    padding: 4,
  },  
  image:{
    borderColor: "black",
    borderWidth: 1,
    height: "40%",
    width: "80%",
    alignSelf:"center"
  },
  space:{
    width:25,
    height:25
  },
  body:{
    flexDirection:"column",
    paddingBottom: "10%", 
    width: "80%",
    alignSelf:"center"
  },
  text:{
    padding: 10,
    height: 40,
    fontFamily: "OpenSans_700Bold",
    color: "#0E1D31",
    borderColor: "#3BBA6C",
    borderRadius: 10,
    borderWidth: 1,
    textAlign: "center"
  },
  footer:{
    paddingLeft: 5,
    paddingRight: 5
  },
  button:{
    width:80,
    height:80
  }
});
