import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  Dimensions,
} from "react-native";
import React from "react";

interface ButtonProp {
  placeholder: string;
  onPressHandler: (event: GestureResponderEvent) => void;
}

const windowWidth = Dimensions.get("window").width;

const EditeazaContButton = ({ placeholder, onPressHandler }: ButtonProp) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View
        style={{
          width: windowWidth - 100,
          height: 50,
          backgroundColor: "#3B60FB",
          borderRadius: 4,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
          {placeholder}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EditeazaContButton;
