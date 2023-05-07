import { View, Text } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";

const CVVCardInput = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderColor: "#ddd",
        backgroundColor: "#EEF1F4",
        borderWidth: 1,
        height: 60,
        width: "40%",
        justifyContent: "center",
        marginTop: 10,
        alignSelf: "center",
        marginLeft: 60,
      }}
    >
      <Input
        placeholder="3 cifre"
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

export default CVVCardInput;
