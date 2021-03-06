import React from 'react';
import { Pressable, StyleSheet, FlatList, View, Text} from 'react-native';
import Card from "../components/Card.js"
import { header as headerStyle, scrollEnv} from "../styleobject/Objects.js"

function separator() {
  return (
    <View style={{height:10}}>
    </View>
  )
}

function header() { 
  return ( 
    <View >
      <Text style={styles.headerText} >
        Shared with me
      </Text>
    </View>
  )
}

export default SharedWithMe = ({navigation}) => {
  let wishList = []

    wishList.push({          
      id: 1,
      title: "Lone's wishlist",
      numGifts: 40,
      imageUri: require('../../assets/img/img1.jpg'),
      imageUri2: require('../../assets/img/img1.jpg')
    })
    wishList.push({
      id: 2,
      title: "Bjarne's amazing wishlist",
      numGifts: 5,
      imageUri: require('../../assets/img/img1.jpg'),
      imageUri2: require('../../assets/img/img1.jpg')
    })

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("Wishlist", {
          id: 0,
          title: item.title,
          shared: true
        })
      }}
    >
      <Card 
        title={item.title}
        subtitle={item.numGifts + " wishes"}
        imageUri={item.imageUri}
        imageUri2={item.imageUri2}
      />
    </Pressable>
  )

  return (
    <View style={styles.main}>
      <FlatList
        data={wishList}
        style={styles.scrollEnv}
        renderItem={renderItem}
        ListFooterComponent={
          <View
            style={{ height: 30, width: 320}}
          />
        }
        ListHeaderComponent={header}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  ...headerStyle,
  ...scrollEnv,
  main: {
    width: '100%',
  },
})
