import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import md5 from 'md5';


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


//Sha256 hashing, men virker ikke uden "gradlew clean" hvilket ikke virker..

  /*
  
  import React, {useState} from 'react';

import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import {sha256} from 'react-native-sha256';

export default function App(){

  const [result, setResult] = useState('Hash Key Show Here');
  const [input, setInput] = useState('');

  const convertToSHA =()=> {

    sha256(input).then((hash) => {
        setResult(hash);
    });

  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>

        <Text style={{fontSize:25, textAlign: 'center', color: '#D50000'}}> 
            Generate SHA256 Encoded Hash in React Native 
        </Text>

        <Text style={{margin: 12, fontSize: 22}}> {result} </Text>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={
            (text) => setInput(text)
          }
          placeholder="Enter Value"
          value={input}
        />

        <TouchableOpacity
          style={styles.touchableOpacityStyle}
          onPress={convertToSHA}>

          <Text style={styles.touchableOpacityText}> Click Here To Convert to SHA 256 </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },

  textInputStyle: {
    height: 40,
    width: 300,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20
  },

  touchableOpacityStyle: {
    backgroundColor: '#33691E',
    height: 42,
    alignItems: 'center',
    borderRadius: 7,
    justifyContent:'center',
    alignItems: 'center',
    width: '100%'
  },

  touchableOpacityText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
});

  */ 