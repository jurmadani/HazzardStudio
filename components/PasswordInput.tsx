import { View, Dimensions, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Input } from "@ui-kitten/components";
//@ts-expect-error
import Icon from "react-native-vector-icons/AntDesign";
//@ts-expect-error
import EntypoIcon from "react-native-vector-icons/Entypo";

interface PasswordInputProps {
  secureTextEntry: boolean;
  setSecureTextEntry: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordIcon = () => <Icon name="lock" size={25} color="white" />;

const PasswordInput = ({
  secureTextEntry,
  setSecureTextEntry,
  value,
  onChangeText,
}: PasswordInputProps) => {
  const windowWidth = Dimensions.get("window").width;

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const EyeIcon = () => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <EntypoIcon
        name={secureTextEntry ? "eye-with-line" : "eye"}
        size={22}
        color="white"
      />
    </TouchableWithoutFeedback>
  );
  return (
    <View
      style={{
        borderRadius: 10,
        borderColor: "white",
        backgroundColor: "transparent",
        marginTop: 16,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
      }}
    >
      <Input
        placeholder="Parola"
        size="large"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        textStyle={{ fontSize: 15,color:'white' }}
        style={{
          width: windowWidth - 90,
          borderWidth: 0,
          backgroundColor: "transparent",
        }}
        placeholderTextColor={"white"}
        accessoryLeft={PasswordIcon}
        accessoryRight={EyeIcon}
        
      />
    </View>
  );
};

export default PasswordInput;
