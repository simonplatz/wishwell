import React, {useContext, useEffect, useState}  from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { useFonts, OpenSans_600SemiBold, OpenSans_400Regular } from "@expo-google-fonts/open-sans"
import DateTimePicker from '@react-native-community/datetimepicker';
import Information from '../components/TextInfoField.js'
import { LoginContext } from '../contexts/LoginContext.js'
import generateBoxShadowStyle from "../tools/dropShadow.js"
import {buttons, floatingButton} from "../styleobject/Objects.js"


const USERDATA = {
  id: 'id1',
  title: 'Joakim',
  email:'email@email.com',
  date: '1637911922589'
}

export default Settings = ({navigation}) => {
  let [fontsLoaded] = useFonts({OpenSans_600SemiBold, OpenSans_400Regular, });

  const loginContext = useContext(LoginContext)
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', style);

  const [changedState, setChangedState] = useState(false)
  const [changes, setChangedProperties] = useState({})

  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState({
    date: new Date(),
    displayString: ''
  })

  function textChanged(event, property) {
    setChangedState(true)
    changes[property] = event
  }

  function getDisplayDate(date) {
    return date.getDate() + "-" + parseInt(date.getMonth() + 1).toString() + "-" + date.getFullYear();
  }

  function dateChanged(event, selectedDate) {
    setShowDatePicker(false)
    if (selectedDate != undefined) {
      const newDate = new Date(selectedDate)

      setDate({
        date: newDate,
        displayString: getDisplayDate(newDate)
      })
      if (event != "initial") {
        textChanged(newDate.getTime(), "Birthday")
      }
    }
  }

  useEffect(() => {
    dateChanged("initial", parseInt(USERDATA.date))
  }, [])

  let button;
  let modify;
  if (loginContext.loggedIn) {
    button = 
      <Pressable 
        style={({pressed}) => [
          style.contrastButton, 
          style.floatingButton, 
          style.boxShadow,
          pressed ? style.pressedContrastButton : {}
        ]}
        color = "#3BBA6C" 
        onPress={() => loginContext.toggleLogin(false)}
      >
        <Text style={style.contrastButtonText}>{"Logout"}</Text>
      </Pressable>

      modify = 
        <View> 
         <Image style={style.image}
            source={require("../../assets/img/img4.jpg")} />
          <Information
            info={"Name"}
            initialValue={USERDATA.title}
            changeText={textChanged}
          />
          <Information 
            info={"Email"}
            initialValue={USERDATA.email}
            changeText={textChanged}
          />
          <Information 
            info={"Birthday"}
            initialValue={date.displayString}
            editable={false}
            onPress={setShowDatePicker}
          />
          <View
            style={{flex: 1, alignItems: "center"}}
          >
            <Pressable
              style={({pressed}) => 
                [
                  style.button, 
                  changedState ? {} : {backgroundColor: "#dfdfdf", borderColor: "#dfdfdf"}, {width: '100%'} ,
                  pressed && changedState ? style.pressedButton : {}
                ]}
            >
              <Text style={style.saveButtonText}>
                {"Save changes"}
              </Text>
            </Pressable>

          </View>
          {showDatePicker && <DateTimePicker
            value={date.date}
            mode={"date"}
            is24Hour={true}
            onChange={dateChanged}
            style={{width: 420, backgroundColor: "white"}}
          />
        }
        </View>
  } else  {
    button = 
      <Pressable 
        style={({pressed}) => 
          [style.button, 
          style.floatingButton, 
          style.boxShadow,
          pressed ? style.pressedButton : {} 
        ]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={style.floatingButtonText}>{"Login"}</Text>
      </Pressable>
      modify = <View></View>
  }

  if(!fontsLoaded) {
    return <View></View>
  } else {
    return (
      <View style={style.container}>
        <ScrollView
          contentContainerStyle={style.scrollEnv}
        >
          {modify}
        </ScrollView>
        {button}
      </View>
    )};
};

const style = StyleSheet.create({
  ...floatingButton,
  ...buttons,
  scrollEnv: {
    padding: "5%",
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  item:{
    marginVertical: 10,   
    flexDirection: "row",
    width:"100%",
    height:"45%",
    alignItems: "center"
  },
  space: {
    width: 30,
    height: 30
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
  boxShadow: {}
});

