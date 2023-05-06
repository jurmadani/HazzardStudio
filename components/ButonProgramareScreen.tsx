import {
  View,
  Text,
  GestureResponderEvent,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

interface ButtonProp {
  placeholder: string;
  onPressHandler: (event: GestureResponderEvent) => void;
}

const windowWidth = Dimensions.get("window").width;

const ButonProgramareScreen = ({ placeholder, onPressHandler }: ButtonProp) => {
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View
        style={{
          width: windowWidth - 70,
          height: 56,
          backgroundColor: "#CACACA",
          borderRadius: 4,
          alignItems: "center",
          justifyContent: "center",
          marginTop:30,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "600", color: "white" }}>
          {placeholder}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButonProgramareScreen;
