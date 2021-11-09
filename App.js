/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from "./src/navigation/TabNavigator.js"

function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

export default App*/



import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import md5 from 'md5';

//https://code.tutsplus.com/tutorials/how-to-hash-and-decrypt-with-md5-in-javascript--cms-38297
//Validate = hash det igen, og tjek om det samme

export default class App extends Component {

  constructor(props) {
    super(props);
    //initial value of Text
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container} >
        <Text>
          {this.state.text == '' 
          ? 'Convert text'
          : md5(this.state.text)}
        </Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setState({ text })}
          placeholder="Please Enter Any Value"
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },
    inputStyle: {
      height: 40,
      width:'100%',
      marginTop: 16,
      textAlign: 'center',
      borderColor: '#03a9f4',
      backgroundColor: '#ecf0f1',
      borderWidth: 1,
    }
  });