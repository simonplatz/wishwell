import React, {useState} from "react";
import { View, StyleSheet, Text, SafeAreaView, Button, Modal, StatusBar } from "react-native";
import { TextInput} from "react-native-gesture-handler";

export default ModalButtonView = (props) => {
    // mange the model state
    const [isVisible, setWindowVisible] = useState(false);
    // control input value
    const [inputValue, setInputValue] = useState("");
    // controls the visibility of the pop-up window
    const togglePopupwindow = () => {
      setWindowVisible(!isVisible);
  };
  let text
  let buttontext
  {
      text =
     <View style={style.modalView}>
         <Text>{props.text}</Text>
     </View>
     buttontext =
     <View>
         <Text>{props.buttontext}</Text>
     </View>
  }
  return (
    <SafeAreaView>
        <StatusBar style="auto" />
        {/**  The first button on the screen */}
        <Button title={props.buttontext}  onPress={togglePopupwindow} color = "#3BBA6C" />
  
        {/** This is our modal component containing textinput and a button */}
        <Modal animationType="slide" 
               transparent visible={isVisible} 
               presentationStyle="overFullScreen" 
               onDismiss={togglePopupwindow}>
            <View style={style.viewWrapper}>
                <View style={style.modalView}>
                    <Text> {props.text} </Text>
                    <TextInput placeholder= "Type Here" 
                               value={inputValue} style={style.text} 
                               onChangeText={(value) => setInputValue(value)}
                               multiline />
                    {/** This button is responsible to close the modal */}
                    <View style={{flexDirection: "row"}}>
                    <Button title="Close" onPress={togglePopupwindow} color = "#3BBA6C"/>
                    <View style={style.space}/>
                    <Button title="Confirm" onPress={togglePopupwindow} color = "#3BBA6C"/>
                    </View>
                </View>
            </View>
        </Modal>
    </SafeAreaView>
  );}


const style = StyleSheet.create({
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
    borderRadius: 7
},
space: {
    width: 20,
    height: 20
},
text:{
    fontSize: 15,
    alignSelf: "center"
  },
});