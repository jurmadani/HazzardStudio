import { View, Dimensions } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
//@ts-expect-error
import Icon from "react-native-vector-icons/AntDesign";

interface EmailInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const EmailIcon = () => <Icon name="mail" size={20} color="white" />;

const EmailInput = ({ value, onChangeText }: EmailInputProps) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        alignSelf: "center",
        borderRadius: 10,
        borderColor: "white",
        backgroundColor: "transparent",
        marginTop: 40,
        borderWidth: 1,
        width: windowWidth - 90,
      }}
    >
      <Input
        placeholder="Email"
        size="large"
        value={value}
        onChangeText={onChangeText}
        textStyle={{ fontSize: 15,color:'white' }}
        style={{
          width: 330,
          borderWidth: 0,
          backgroundColor: "transparent",
        }}
        placeholderTextColor={"white"}
        accessoryLeft={EmailIcon}
      />
    </View>
  );
};

export default EmailInput;
