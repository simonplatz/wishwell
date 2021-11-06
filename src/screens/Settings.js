import React from "react";
import { View, Image, StyleSheet, Text, SafeAreaView, Button, Alert } from "react-native";
import {FlatList} from "react-native-gesture-handler";


export default SettingsImage => {
  const infomrationrender = ({item}) => (
    <Information title = {item.title} />
  );
  return (
    <View style={style.container}>
      <Image style={style.image}
        source={require("../../assets/wishwlll.png")} />
        <View style={style.text, {paddingTop: 10, alignSelf: "center"}}><Text> Username: Hellokitty</Text></View>
          <SafeAreaView style={style.item}>
            <FlatList style={style.flatlistview}
            data={USERDATA}  
            renderItem={infomrationrender}
            keyExtractor={item => item.id}
            />
              <View style={style.button}>
              <Button 
              onPress={() => Alert.alert('Change Username')}  
              title="Change Username"
              color = "#3BBA6C"
              />
              <View style={style.space}/>
              <Button 
              onPress={() => Alert.alert('Change email')}  
              title="Change email"
              color = "#3BBA6C"
              />
              <View style={style.space}/>
              <Button 
              onPress={() => Alert.alert('Change birthdate')}  
              title="Change birthdate"
              color = "#3BBA6C"
              />
              </View>
          </SafeAreaView>
            <View style={style.bottombuttom}>
            <Button
              onPress={() => Alert.alert('Change birthdate')}  
              title="Change Password"
              color = "#3BBA6C"
              />
              <View style={style.space}/>
              <Button
              onPress={() => Alert.alert('Change birthdate')}  
              title="logout"
              color = "#3BBA6C"
              />
            </View>
    </View>
  );
}

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
    borderColor: "black",
    paddingBottom: 20,
    paddingTop: 20,
  },
  button: {
    alignItems: "center"
  },
  text:{
    fontSize: 15,
    alignSelf: "center"
  },
  space: {
    width: 20,
    height: 20
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
