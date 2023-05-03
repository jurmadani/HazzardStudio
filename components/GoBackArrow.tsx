import { TouchableOpacity, StatusBar } from "react-native";
import React from "react";
//@ts-expect-error
import Icon from "react-native-vector-icons/AntDesign";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";

interface GoBackArrowProps {
  navigation: NativeStackNavigationProp<StackParams>;
}

const GoBackArrow = ({ navigation }: GoBackArrowProps) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        name="arrowleft"
        size={30}
        color="white"
        style={{
          marginLeft: 15,
        }}
      />
    </TouchableOpacity>
  );
};

export default GoBackArrow;
