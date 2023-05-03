import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Input } from "native-base";

const windowWidth = Dimensions.get("window").width;

const NumarTelefonInput = () => {
  return (
    <View style={{ width: windowWidth - 80, marginTop: 20 }}>
      <Text style={{ color: "white", fontSize: 16 }}>Numar telefon</Text>
      <Input
        variant="underlined"
        placeholder="Introdu numarul tau de telefon"
        size="xl"
        placeholderTextColor="#ABB3BB"
        style={{
          color: "white",
        }}
        keyboardType="numeric"
      />
    </View>
  );
};

export default NumarTelefonInput;
