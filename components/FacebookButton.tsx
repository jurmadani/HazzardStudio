import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
//@ts-expect-error
import Icon from "react-native-vector-icons/EvilIcons";

const FacebookIcon = () => <Icon name="sc-facebook" size={30} color="white" />;

const FacebookButton = () => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <TouchableOpacity>
      <View
        style={{
          height: 48,
          width: windowWidth / 2 - 55,
          backgroundColor: "#298FFF",
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 20,
          flexDirection: "row",
        }}
      >
        <FacebookIcon />
        <Text style={{ padding: 4, color: "white", fontWeight: "600" }}>
          Facebook
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FacebookButton;
