import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import TextBox from '../components/TextBox';

export default Login => {
    const [inputValue, setInputValue] = useState("");
    return (
        <View style={style.container}>
            <View style={style.space}/>
            <Image style={style.image}
            source={require("../../assets/wishwlll.png")} />
             <View style={{flexDirection:"column",paddingBottom: "10%", width: "80%"}}>
                <View style={style.space}/>
                <View style={style.space}/>
                    <TextInput 
                    placeholder= "Email" 
                    EmailValue={inputValue} style={style.text} 
                    onChangeText={(EmailValue) => setInputValue(EmailValue)}/>
                    <View style={style.space}/>
                    <TextInput
                    placeholder= "Password" 
                    Passwordvalue={inputValue} style={style.text} 
                    onChangeText={(Passwordvalue) => setInputValue(Passwordvalue)}/>
             </View>
           <View style={{flexDirection: "row",}}>
               <Button style={style.Button} title="Cancel" color="#3BBA6C"/>
               <View style={style.space}/>
               <Button style={style.Button} title="Confirm" color="#3BBA6C"/>
           </View>
           <View style={style.space}/>
            <View>
                <Button title="Sign up" color="#3BBA6C"/>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
      width: "100%",
      padding: 4,
      alignItems: "center"
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
      Button:{
          width: 200,
          height: 200,
          borderColor:"black",
          borderWidth: 1
      }
});
