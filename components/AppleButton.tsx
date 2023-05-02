import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
//@ts-expect-error
import Icon from "react-native-vector-icons/EvilIcons";
//@ts-expect-error
import AntDesign from "react-native-vector-icons/AntDesign";

const AppleIcon = () => <AntDesign name="apple1" size={25} />;

const AppleButton = () => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <TouchableOpacity>
      <View
        style={{
          height: 48,
          width: windowWidth / 2 - 55,
          backgroundColor: "white",
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 20,
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <AppleIcon />
        <Text style={{ padding: 4, fontWeight: "600" }}>Apple</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppleButton;
