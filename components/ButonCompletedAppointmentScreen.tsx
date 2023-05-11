import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButonProps {
  ButonBackground: string;
  TextColor: string;
  Placeholder: string;
  BorderColor?: string;
}

const ButonCompletedAppointmentScreen = ({
  ButonBackground,
  TextColor,
  Placeholder,
  BorderColor,
}: ButonProps) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 35,
          width: 130,
          backgroundColor: ButonBackground,
          margin: 10,
          borderWidth: BorderColor ? 2 : 0,
          borderColor: BorderColor,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: TextColor }}>{Placeholder}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButonCompletedAppointmentScreen;
