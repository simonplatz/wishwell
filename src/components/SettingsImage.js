import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default SettingsImage => {
  return (
    <View style={style.container}>
      <Image
        style={{
          borderColor: "black",
          borderWidth: 1,
          height: 125,
          width: 125,
          borderRadius: 125/2
        }}
        source={require("../../assets/wishwlll.png")}
      />
      <Text>Joakim billede</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
    top: 0,
    left: 5,
    overflow: "hidden"
  }
});
