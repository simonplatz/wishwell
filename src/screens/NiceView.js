import React from 'react';
import { Text, View } from 'react-native';

export default NiceView = ({route}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nice View, which we call</Text>
      <Text>{route.params.viewName}</Text> 
    </View>
  );
}
