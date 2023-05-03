import { View, Text, Dimensions, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Input } from "native-base";
//@ts-expect-error
import EntypoIcon from "react-native-vector-icons/Entypo";

interface PasswordInputProps {
  secureTextEntry: boolean;
  setSecureTextEntry: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  onChangeText: (text: string) => void;
}

const RegisterRetypePasswordInput = ({
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
    <View style={{ width: windowWidth - 80, marginTop: 20 }}>
      <Text style={{ color: "white", fontSize: 16 }}>Parola</Text>
      <Input
        value={value}
        onChangeText={onChangeText}
        variant="underlined"
        placeholder="Reintrodu parola ta"
        size="xl"
        placeholderTextColor="#ABB3BB"
        style={{
          color: "white",
        }}
        InputRightElement={EyeIcon()}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default RegisterRetypePasswordInput;
