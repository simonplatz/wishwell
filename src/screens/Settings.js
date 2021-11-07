import React, {useState} from "react";
import { View, Image, StyleSheet, Text, SafeAreaView, Button, Alert, Modal, Pressable, StatusBar } from "react-native";
import {FlatList, TextInput} from "react-native-gesture-handler";
import Dialog from "react-native-dialog";
import DialogInput from "react-native-dialog/lib/Input";

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
              <Buttonview/>
              <View style={style.space}/>
              <Button
              onPress={() => Alert.alert('Change birthdate')}  
              title="logout"
              color = "#3BBA6C"/>
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

const Buttonview = () => {
  // mange the model state
  const [isModalVisible, setModalVisible] = useState(false);
  // control input value
  const [inputValue, setInputValue] = useState("");
  // controls the visibility of the pop-up window
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
};
return (
  <SafeAreaView style={style.popupwindow}>
      <StatusBar style="auto" />

      {/**  We are going to create a Modal with Text Input. */}
      <Button title="Change Password" onPress={toggleModalVisibility} color = "#3BBA6C" />

      {/** This is our modal component containing textinput and a button */}
      <Modal animationType="slide" 
             transparent visible={isModalVisible} 
             presentationStyle="overFullScreen" 
             onDismiss={toggleModalVisibility}>
          <View style={style.viewWrapper}>
              <View style={style.modalView}>
                  <Text> Change your Password </Text>
                  <TextInput placeholder="Enter here!" 
                             value={inputValue} style={style.text} 
                             onChangeText={(value) => setInputValue(value)}
                             multiline />

                  {/** This button is responsible to close the modal */}
                  <View style={{flexDirection: "row"}}>
                  <Button title="Close" onPress={toggleModalVisibility} color = "#3BBA6C"/>
                  <View style={style.space}/>
                  <Button title="Confirm" onPress={toggleModalVisibility} color = "#3BBA6C"/>
                  </View>
              </View>
          </View>
      </Modal>
  </SafeAreaView>
);}

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
  },
  popupwindow: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
},
modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    height: "20%",
    width: "70%",
    backgroundColor: "#fff",
    borderRadius: 7,
},
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
