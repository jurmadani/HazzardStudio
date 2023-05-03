import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CheckBox } from "@ui-kitten/components";
import { Dimensions } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";

interface CheckboxComponentProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  navigationText?: string;
  navigation?: NativeStackNavigationProp<StackParams>;
}

const Checkbox = ({
  checked,
  setChecked,
  message,
  navigationText,
  navigation,
}: CheckboxComponentProps) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        alignItems: "center",
        marginLeft: windowWidth - (windowWidth - 15),
        marginTop: 20,
        flexDirection: "row",
      }}
    >
      <CheckBox
        checked={checked}
        onChange={(nextChecked) => setChecked(nextChecked)}
      />
      <Text style={{ marginLeft: 10, color: "white" }}>{message}</Text>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation?.navigate("ForgotPassword")}
      >
        <Text
          style={{
            textAlign: "right",
            marginRight: windowWidth - (windowWidth - 15),
            color: "#FC6D5B",
            fontWeight: "600",
          }}
        >
          {navigationText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkbox;
