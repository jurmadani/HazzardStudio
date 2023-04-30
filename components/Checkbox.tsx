import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CheckBox } from "@ui-kitten/components";
import { Dimensions } from "react-native";

interface CheckboxComponentProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = ({ checked, setChecked }: CheckboxComponentProps) => {
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
      <Text style={{ marginLeft: 10, color: "white" }}>Remember me</Text>
        <TouchableOpacity style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "right",
              marginRight: windowWidth - (windowWidth - 15),
              color: "#FC6D5B",
              fontWeight: "600",
            }}
          >
            Ai uitat parola?
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default Checkbox;
