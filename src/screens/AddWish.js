import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TextBox from '../components/TextBox';
import Card from '../components/Card';

export default function AddWish() {
    const textRender = ({item}) => (
        <TextBox title = {item.title} />
      );
    return (
    <SafeAreaView>
        <Card 

        />
        <FlatList
            data={addWishData}
            renderItem={textRender}
            keyExtractor={item => item.id}
        />

        <View style = {Styling.button}>
        <Button 
            onPress={() => Alert.alert("Wish added!")}
            title = "Add wish to wishlist"
            color = "#3BBA6C"
        />
        </View>
    </SafeAreaView>
    
  );
}

const Styling = StyleSheet.create({
    button: {
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
    }
})

const addWishData = [
{
    id: 'id1',
    title: 'Name',
},
{
    id: 'id2',
    title: 'Price',
},
{
    id: 'id3',
    title: 'Size',
},
{
    id: 'id4',
    title: 'Gift type',
},
{
    id: 'id5',
    title: 'URL',
}
];