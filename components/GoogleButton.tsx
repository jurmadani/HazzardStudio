import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
//@ts-expect-error
import Icon from "react-native-vector-icons/AntDesign";

const GoogleIcon = () => <Icon name="google" size={20} color="white" />;

const GoogleButton = () => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 48,
          width: windowWidth / 2 - 55,
          backgroundColor: "#FC6A57",
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <GoogleIcon />
        <Text style={{ padding: 10, color: "white", fontWeight: "600" }}>
          Google
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;
