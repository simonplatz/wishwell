import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import Information from '../components/TextInfoField.js'
import TextBox from '../components/TextBox';
import Card from '../components/Card';


export default function Share() {
    return (
    <SafeAreaView>

        <ScrollView
          style={{padding: '5%'}}
        >
          <Information
            info={"To share"}
            initialValue={"https://localhost"}
            selectTextOnFocus={true}
            editable={true}
          />
        
          <Information
            info={"To edit"}
            initialValue={"https://localhost"}
            selectTextOnFocus={true}
            editable={true}
          />
        </ScrollView>
    </SafeAreaView>
    
  );
}

const Styling = StyleSheet.create({
    text: {
        paddingLeft: 25,
        fontFamily: "OpenSans_700Bold",
        color: "#0E1D31",
    },
    space: {
        paddingBottom: 20,
    }
})

const addWishData = [
{
    id: 'id1',
    title: '',
},
{
    id: 'id2',
    title: '',
},
];
