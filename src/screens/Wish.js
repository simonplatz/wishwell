import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, Pressable } from 'react-native';
import { floatingButton, scrollEnv, buttons, header as headerStyle, subHeader} from "../styleobject/Objects.js"
import {card} from "../styleobject/CardStyle.js"
import { useFonts, OpenSans_700Bold, OpenSans_600SemiBold } from "@expo-google-fonts/open-sans"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { UpdateContext } from '../contexts/UpdateContext.js'

import generateBoxShadowStyle from "../tools/dropShadow.js"




export default Wish = ({route, navigation}) => {
  let [fontsLoaded] = useFonts({OpenSans_700Bold, OpenSans_600SemiBold });

  const sharedState = route.params.shared != undefined ? route.params.shared : false

  const [wish, setWish] = useState({})
  const [edit, setEdit] = useState(!sharedState)

  const updateContext = useContext(UpdateContext)

  generateBoxShadowStyle(-2, 4, '#171717', 0.2, 3, 4, '#171717', styles);

  function loadWish()  {
    navigation.setOptions({ title: wish.name})
    console.log("id " + route.params.id)
    fetch('https://pratgen.dk/wishwell/getwish/' + encodeURI(route.params.id))
      .then(response => response.json())
      .then(data => {
        setWish(data[0])
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadWish()
  }, []);

  useEffect(() => {
    loadWish()
  }, [updateContext.update.updateWish])


  async function deleteWish(wishid) {
    fetch('https://pratgen.dk/wishwell/deleteWish/' + wishid,
      {method: 'PUT'}
    )
  }

  const TrashBtn = () => {
    if (edit) {
      console.log("editing dsplaing trash.")
      return (
        <Pressable
          style={[
            styles.button, 
            {
              flex: 1
            }
          ]}
          onPress={() => {
            deleteWish(wish.id).then(() => {
              updateContext.setUpdate({updateContext, ...{ update: {updateWishlist : !updateContext.update.updateWishlist}}})
              navigation.pop()
            })
          }}
        >
          <Text>
            <FontAwesomeIcon
              icon={faTrashAlt}
              size={20}
              color={'#fff'}
            />
          </Text>
        </Pressable>
      )
    } else {
      return (<View></View>)
    }
  }

  let buyOrEdit;
  if (sharedState) {
    buyOrEdit = 
      <Pressable style={({pressed}) =>
        [
          styles.button, 
          styles.boxShadow,
          styles.floatingButton,
          pressed ? styles.pressedButton : {}
        ]}
      >
      <Text style={styles.floatingButtonText}>
        Buy
      </Text>
    </Pressable>
  } else {
    buyOrEdit = 
      <View
        style={[
          styles.floatingButton,
          {
            display: 'flex',
            flexDirection: 'row',
            zIndex: 1
          }
        ]
        }
      >
        <TrashBtn />
        <Pressable 
          style={({pressed}) =>
          [
            styles.button, 
            styles.boxShadow,
            pressed ? styles.pressedButton : {},
            {flex: 4}
          ]}
          onPress={() => {
            navigation.navigate("Edit Wish",
              {wish: wish}
            )
          }}
        >
        <Text style={styles.floatingButtonText}>
          {"Edit" }
        </Text>
        </Pressable>
      </View>
  }


  if(!fontsLoaded) {
    return (<View></View>)
  } else {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        {buyOrEdit}
        <ScrollView
          style={styles.scrollEnv}
        >
          <View
          >
            <Text style={styles.headerText}>
              {wish.name} 
            </Text>
            <View 
            >
              <Image 
                style={styles.image}
                source={{uri: wish.picturelink}} 
              /> 
            </View>
            <View style={styles.textContainer}>
              <View style={styles.priceManufacturer}>
                <Text style={styles.manufacture}>
                  {wish.manufacturer}
                </Text>
                <Text style={styles.subHeader}>
                  {wish.price} kr 
                </Text>
              </View>
              <Text style={styles.textBox}>
                {wish.description}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ...floatingButton,
  ...headerStyle,
  ...scrollEnv,
  ...card,
  ...buttons,
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover'
  },
  buyButton: {
    position: "absolute",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    width: '70%',
    borderRadius: 4,
    bottom: 10,
    height: 55,
    backgroundColor: "#3BBA6C",
    zIndex: 2
  },
  subHeader: {
    fontFamily: "OpenSans_700Bold",
    fontSize: 26
  },
  colorHeader: {
    ...subHeader.subHeader,
    fontFamily: "OpenSans_600SemiBold",
    margin: 0,
    textAlign: "center",
    color: "#F9F9F9"
  },
  manufacture: {
    margin: 0,
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 26
  },
  textContainer: {
    margin: '3%',
    marginBottom: 100
  },
  textBox: {
    margin: 10,
    marginLeft: 0,
    marginRight: 0,
    fontSize: 16
  },
  priceManufacturer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  rightTopTrash: {
    margin: 10,
    marginRight: 20
  }
})
