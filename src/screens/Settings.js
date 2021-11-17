import React, {useContext, useEffect, useState}  from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { useFonts, OpenSans_600SemiBold, OpenSans_400Regular } from "@expo-google-fonts/open-sans"
import DateTimePicker from '@react-native-community/datetimepicker';
import { LoginContext } from '../contexts/LoginContext.js'
import generateBoxShadowStyle from "../tools/dropShadow.js"
import {textInput, buttons} from "../styleobject/Objects.js"


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
  if (loginContext.loggedIn) {
    button = 
      <Pressable 
        style={[style.contrastButton, style.saveButton, style.boxShadow]}
        color = "#3BBA6C" 
        onPress={() => loginContext.toggleLogin(false)}
      >
        <Text style={style.contrastButtonText}>{"Logout"}</Text>
      </Pressable>
  } else  {
    button = 
      <Pressable 
        style={[style.button, style.saveButton, style.boxShadow]}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={style.buttonText}>{"Login"}</Text>
      </Pressable>
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
              style={[style.button, changedState ? {} : {backgroundColor: "#dfdfdf", borderColor: "#dfdfdf"}, {width: '100%'} ]}
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
        </ScrollView>
        {button}
      </View>
    )};
};



// uses userdata to set the title
const Information = (props) => {

  function changed(e) {
    props.changeText(e, props.info)
  }

  return (
    <Pressable
      onPress={() => {
        if(props.onPress != undefined) {
          props.onPress(true)
        }
      }}
    >
      <View style={style.informationContainer}>
        <Text style={style.informationText}>{props.info}</Text>
        <TextInput 
          style={style.input}
          onChangeText={changed}
          editable={props.editable != undefined ? props.editable : true}
          onPressOut={() => {
            if(props.onPress != undefined) {
              props.onPress(true)
            }
          }}
        >
          {props.initialValue}
        </TextInput>
      </View>
    </Pressable>


  )
}


const style = StyleSheet.create({
  scrollEnv: {
    padding: "5%",
  },
  ...buttons,
  ...textInput,
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
  informationContainer:{
    width: "100%",
    marginBottom: 15,
  },
  informationText: {
    fontFamily: 'OpenSans_600SemiBold',
    marginBottom: 4,
    marginLeft: 5
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
  saveButton: {
    position: 'absolute',
    bottom: 10,
    width: '91%',
    left: '4.5%',
    height: 45,
    margin: 0 
  },
  saveButtonText: {
    color: '#fff',
    fontFamily: 'OpenSans_600SemiBold'
  },
  boxShadow: {}
});

