import { View, Text } from "react-native";
import React from "react";

interface StatusAppointmentCardProps {
  status: string;
}

const StatusAppointmentCard = ({ status }: StatusAppointmentCardProps) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: status === "completed" ? "#07BD74" : "#F75555",
        borderRadius: 5,
        marginLeft: 7,
        height: 25,
        width: 90,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: status === "completed" ? "#07BD74" : "#F75555" }}>
        {status === "completed" ? "Completat" : "Anulat"}
      </Text>
    </View>
  );
};

export default StatusAppointmentCard;
