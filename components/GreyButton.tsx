import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";

interface ButtonProps {
  placeholder: string;
  navigation?: NativeStackNavigationProp<StackParams>;
}

const GreyButton = ({ placeholder, navigation }: ButtonProps) => {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={{ marginTop: 25 }}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => navigation?.navigate("Drawer")}
      >
        <View
          style={{
            width: windowWidth - 125,
            height: 52,
            backgroundColor: "#ACACAC",
            borderWidth: 0,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>
            {placeholder}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default GreyButton;
