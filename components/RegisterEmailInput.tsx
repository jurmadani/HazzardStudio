import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Input } from "native-base";

const windowWidth = Dimensions.get("window").width;

const RegisterEmailInput = () => {
  return (
    <View style={{ width: windowWidth - 80, marginTop: 20 }}>
      <Text style={{ color: "white", fontSize: 16 }}>Email</Text>
      <Input
        variant="underlined"
        placeholder="Introdu email-ul tau"
        size="xl"
        placeholderTextColor="#ABB3BB"
        style={{
          color: "white",
        }}
      />
    </View>
  );
};

export default RegisterEmailInput;
