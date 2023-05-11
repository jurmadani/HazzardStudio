import { View, Text } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";

const CardHolderNameInput = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderColor: "#ddd",
        backgroundColor: "#EEF1F4",
        borderWidth: 1,
        height: 60,
        width: "90%",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Input
        placeholder="Nume"
        size="large"
        textStyle={{ fontSize: 15, color: "black" }}
        style={{
          width: 330,
          borderWidth: 0,
          backgroundColor: "transparent",
        }}
        placeholderTextColor={"#9E9EA4"}
      />
    </View>
  );
};

export default CardHolderNameInput;
