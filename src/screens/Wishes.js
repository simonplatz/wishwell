import React from 'react';
import { Pressable, StyleSheet, FlatList, Text, View } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import Card from "../components/Card.js";

const data = [
  { key: '0', wishes: [
    {key: '0', name: "Kettle", price: '1299'},
    {key: '1', name: 'Coffee', price: '100'},
    {key: '2', name: 'Espresso Machine', price: '3899'},
    {key: '3', name: 'Tamper', price: '400'}
  ]},
  { key: '1'},
  { key: '2'},
  { key: '3'},
  { key: '4'}
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

function generateBoxShadowStyle (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
)  {
  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

export default NiceView = ({route}) => {
  const bottomTabHeight = useBottomTabBarHeight()
  const wishlist = data.find(item => item.key == route.params.id) 
  console.log(wishlist.wishes)

  const renderItem = ({ item }) => (
    <Pressable>
      <Card
        title={item.name}
        subtitle={item.price}
        imageUri={require('../../assets/img/img1.jpg')}
      />
    </Pressable>
  )
  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717');

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
        ListFooterComponent={<View style={{height: bottomTabHeight }}></View>}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  home : {
    margin: "5%",
  },
  headerText: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 36,
    width: "100%", 
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
  },
  boxShadow: {}
})
