import React from "react";
import { View, Image, StyleSheet, Text, StatusBar, SafeAreaView } from "react-native";
import {FlatList} from "react-native-gesture-handler";


export default SettingsImage => {
  const infomrationrender = ({item}) => (
    <Information title = {item.title} />
  );
  return (
    <View style={style.container}>
      <Image
        style={{
          borderColor: "black",
          borderWidth: 1,
          height: 125,
          width: 125,
          borderRadius: 125/2,
        }}
        source={require("../../assets/wishwlll.png")} />

        <SafeAreaView style={style.container}>
          <FlatList 
          data={USERDATA} 
          renderItem={infomrationrender}
          keyExtractor={item => item.id}
          />
        </SafeAreaView>

        
      </View>
  );
}
// uses userdata to set the title
const Information = ({title}) => (
  <View style={style.item}>
    <Text style={style.text}>{title}</Text>
  </View>
)

const style = StyleSheet.create({
  container: {
    width: 250,
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
  },
  item:{
    padding: 3,
    marginVertical: 2,
    marginHorizontal: 16,
    borderColor: "black",
    borderWidth: 1,
  },
  text:{
    fontSize: 20
    
  }
});

const USERDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Joakim'
  },
  {
    id:'3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title:'email@email.com'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '17-07-1997'
  }

]
