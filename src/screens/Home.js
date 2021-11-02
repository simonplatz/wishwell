import React from 'react';
import { Button, Text, View } from 'react-native';

export default Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="go to next view" onPress={ () => {
        navigation.navigate('MyNiceView', { viewName: "titlesd"})
      }}></Button>
    </View>
  );
}

