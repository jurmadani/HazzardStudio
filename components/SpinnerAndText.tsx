import { View, Text } from "react-native";
import React from "react";
import { Spinner } from "@ui-kitten/components";

const SpinnerAndText = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Spinner size="large" />
      <Text style={{ marginTop: 20 }}>Finalizare programare</Text>
    </View>
  );
};

export default SpinnerAndText;
