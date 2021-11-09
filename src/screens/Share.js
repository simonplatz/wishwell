import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert} from 'react-native';
import {ScrollView } from 'react-native-gesture-handler';
import TextBox from '../components/TextBox';
import Card from '../components/Card';


export default function Share() {
    return (
    <SafeAreaView>
        <Card
        />
        <View style={Styling.space}></View>

        <ScrollView>
        <Text style={Styling.text}>To share:</Text>

        <TextBox/>
        
        <View style={Styling.space}></View>
        
        <Text style={Styling.text}>To edit:</Text>
        
        <TextBox/>
        
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