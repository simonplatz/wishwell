import React, {useState} from "react";
import { View, Image, StyleSheet, Text, SafeAreaView, Button, Alert, Modal, Pressable, StatusBar } from "react-native";
import {FlatList, TextInput} from "react-native-gesture-handler";
import ModalButtonView from "../components/ModalButtonView";
import TextBox from "../components/TextBox";

export default Settings = () => {
  const InformationRender = ({item}) => (
    <Information title = {item.title} />
  );
  return (
    <View style={style.container}>
      <Image style={style.image}
        source={require("../../assets/wishwlll.png")} />
        <View style={style.text, {paddingTop: 10, alignSelf: "center"}}></View>
          <SafeAreaView style={style.item}>
            <FlatList style={style.flatlistview}
            data={USERDATA}  
            renderItem={InformationRender}
            keyExtractor={item => item.id}
            />
              <View style={style.button}>
              <ModalButtonView text="Change your name here!" buttontext="Change Name"/>
              <View style={style.space}/>
              <ModalButtonView text="Change your email here!" buttontext="Change Email"/>
              <View style={style.space}/>
              <ModalButtonView text="Change your birthdate here!" buttontext="Change Birthdate"/>
              </View>              
          </SafeAreaView>
            <View style={style.bottombuttom}>
              <ModalButtonView 
              text="Change your password here!"
              buttontext="Change Password"
              />
              <View style={style.space}/>
              <Button title = "logout" color = "#3BBA6C" />
          </View>
    </View>
  );
};

// uses userdata to set the title
const Information = ({title}) => (
  <View style={style.flatlistview}>
    <Text style={style.text}>{title}</Text>
  </View>
)


const style = StyleSheet.create({
  container: {
    width: "100%",
    padding: 4,
  },
  item:{
    marginVertical: 10,   
    flexDirection: "row",
    width:"100%",
    height:"45%",
    alignItems: "center"
  },
  flatlistview:{
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 5,
    width: "90%"
  },
  button: {
    alignItems: "center"
  },
  space: {
    width: 30,
    height: 30
  },
  bottombuttom:{
    alignItems: "center",
    paddingTop: 40
  },
  image:{
      borderColor: "black",
      borderWidth: 1,
      height: 125,
      width: 125,
      borderRadius: 125/2,
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
      }
});

const USERDATA = [
  {
    id: 'id1',
    title: 'Joakim'
  },
  {
    id:'id2',
    title:'email@email.com'
  },
  {
    id: 'id3',
    title: '17-07-1997'
  }
]
