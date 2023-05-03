import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Input } from "native-base";

const windowWidth = Dimensions.get("window").width;

const NumeInput = () => {
  return (
    <View style={{ width: windowWidth - 80, marginTop:20,}}>
      <Text style={{ color: "white", fontSize:16, }}>Nume</Text>
      <Input
        variant="underlined"
        placeholder="Introdu numele tau complet"
        size="xl"
        placeholderTextColor="#ABB3BB"
        style={{
            color:'white',
        }}
          />
    </View>
  );
};

export default NumeInput;
