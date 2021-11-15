import React, {useContext}  from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, Pressable, Button } from "react-native";
import { useFonts, OpenSans_600SemiBold, OpenSans_400Regular } from "@expo-google-fonts/open-sans"
import ModalButtonView from "../components/ModalButtonView";
import { LoginContext } from '../contexts/LoginContext.js'
import {textInput, scrollEnv} from "../styleobject/Text.js"

const USERDATA = {
  id: 'id1',
  title: 'Joakim',
  email:'email@email.com',
  date: '17-07-1997'
}

export default Settings = ({navigation}) => {
  let [fontsLoaded] = useFonts({OpenSans_600SemiBold, OpenSans_400Regular, });

  const loginContext = useContext(LoginContext)

  let button;
  if (loginContext.loggedIn) {
    button = 
      <Button 
        title = "logout" 
        color = "#3BBA6C" 
        onPress={() => loginContext.toggleLogin(false)}
      />
  } else  {
    button = <Button title = "login" color = "#3BBA6C" 
      onPress={() => navigation.navigate("Login")}
    />
  }

  if(!fontsLoaded) {
    return <View></View>
  } else {
    return (
      <View style={style.container}>
        <ScrollView
          contentContainerStyle={style.scrollEnv}
        >
          <Image style={style.image}
            source={require("../../assets/wishwlll.png")} />
          <Information
            info={"Name"}
            initialValue={USERDATA.title}
          />
          <Information 
            info={"Email"}
            initialValue={USERDATA.email}
          />
          <Information 
            info={"Birthday"}
            initialValue={USERDATA.date}
          />
          <View style={style.bottombuttom}>
            <ModalButtonView 
              text="Change your password here!"
              buttontext="Change Password"
            />
            <View style={style.space}/>
          </View>
          {button}
        </ScrollView>
        <Pressable
          style={style.saveButton}
        >
          <Text style={style.saveButtonText}>
            {"Gem ændringer"}
            </Text>
        </Pressable>
      </View>
    )};
};

// uses userdata to set the title
const Information = (props) => (
  <View style={style.informationContainer}>
    <Text style={style.informationText}>{props.info}</Text>
    <TextInput style={style.input}>
      {props.initialValue}
    </TextInput>
  </View>
)


const style = StyleSheet.create({
  ...scrollEnv,
  ...textInput,
  container: {
    flex: 1,
  },
  item:{
    marginVertical: 10,   
    flexDirection: "row",
    width:"100%",
    height:"45%",
    alignItems: "center"
  },
  informationContainer:{
    width: "100%",
    marginBottom: 10
  },
  informationText: {
    fontFamily: 'OpenSans_600SemiBold',
    marginBottom: 6,
    marginLeft: 5
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
    fontFamily: "OpenSans_700Bold",
    color: "#0E1D31",
    backgroundColor: "#F5F3F5",
    borderColor: "#F5F3F5",
    borderRadius: 5,
    borderWidth: 1.5,
  },
  saveButton: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3BBA6C',
    borderRadius: 4,
    bottom: 10,
    width: '90%',
    left: '5%',
    height: 45
  },
  saveButtonText: {
    color: '#fff',
    fontFamily: 'OpenSans_600SemiBold'
  }
});

