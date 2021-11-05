import React from 'react';
import { Pressable, StyleSheet, FlatList, ScrollView, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'

import Card from "../components/Card.js";
import AddButton from "../components/AddButton.js"
import SuggestionCard from "../components/SuggestionCard.js"
import generateBoxShadowStyle from "../tools/dropShadow.js"

const data = [
  { key: '0', wishes: [
    {key: '10', name: "Kettle", price: '1299', manufacturer: 'Chemex'},
    {key: '11', name: 'Coffee', price: '100', manufacturer: 'BestCoffee'},
    {key: '12', name: 'Espresso Machine', price: '3899', manufacturer: 'Rancilio'},
    {key: '13', name: 'Tamper', price: '400', manufacturer: 'Joe Frex'}
  ]},
  { key: '2'},
  { key: '3'},
  { key: '4'}
]

const suggestionData = [
  {key: '1231j' , name: "Filters", manufacturer: "Chemex"},
  {key: '123123', name: "Scale", manufacturer: "Acacia"},
  {key: '12312313', name: "Espresso Cup", manufacturer: "Bodum"}
]

function header(route) {
  return (
    <View >
      <Text style={styles.headerText} >
        {route.params.title}
      </Text>
    </View>
  )
}

function separator() {
  return (
    <View style={{height:10}}>
    </View>
  )
}


function footer() {
  return (
    <View>
      <AddButton/>
      <View style={{flexDirection: "row"}}>
        <ScrollView
          horizontal
        >
        {
          suggestionData.map((item) => (
              <SuggestionCard
                key={item.key}
                title={item.name}
                subtitle={item.manufacturer}
                imageUri={require("../../assets/img/img1.jpg")}
              /> 
            //return <Text key={item.key}>{item.name}</Text>
          ))
        }
        </ScrollView>
      </View>
    </View>
  )
}


export default NiceView = ({route}) => {
  const wishlist = data.find(item => item.key == route.params.id) 

  const renderItem = ({ item }) => (
    <Pressable>
      <Card
        title={item.name}
        price={item.price}
        subtitle={item.manufacturer}
        imageUri={require('../../assets/img/img1.jpg')}
      />
    </Pressable>
  )
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  return (
    <View>
      <View style={[styles.floatingShare, styles.boxShadow]}>
          <FontAwesomeIcon 
            icon={faShare}
            style={styles.shareIcon}
            size={30}
          />
      </View>
      <FlatList
        data={wishlist.wishes}
        renderItem={renderItem}
        contentContainerStyle={styles.home}
        ListHeaderComponent={header(route)}
        ListFooterComponent={footer}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home : {
    margin: "1%",
    marginTop: "2%"
  },
  headerText: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 36,
    width: "100%", 
    marginLeft: "2.5%"
  },
  floatingShare: {
    position: "absolute",
    right: 25,
    bottom: 25,
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "#ebebeb",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  shareIcon: {
  color: "#0E1D31"
  },
  boxShadow: {}
})