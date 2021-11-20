import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeObjectData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log(e)
  }
}

export const getObjectData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return JSON.parse(value)
    } else {
      return null
    }
  } catch(e) {
    console.log(e)
  }
}
