import { View, Text } from "react-native";
import React from "react";
import ButonProgramareScreen from "./ButonProgramareScreen";

const PaymentMethodCash = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text
        style={{
          color: "#B6B6B6",
          fontWeight: "600",
          fontSize: 16,
          width: 300,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Vei plati cash la salon, apasa continua pentru a-ti alege serviciul
        dorit.
      </Text>
    </View>
  );
};

export default PaymentMethodCash;
