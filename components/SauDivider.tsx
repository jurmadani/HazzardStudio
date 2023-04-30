import { View, Text, Dimensions } from "react-native";
import React from "react";

const SauDivider = () => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Prima linie */}
      <View
        style={{
          height: 1,
          width: windowWidth / 2 - 75,
          backgroundColor: "#E1E1E1",
        }}
      />
      <Text style={{ color: "#ABB3BB", margin: 20 }}>sau</Text>
      {/* A 2-a linie */}

      <View
        style={{
          height: 1,
          width: windowWidth / 2 - 75,
          backgroundColor: "#E1E1E1",
        }}
      />
    </View>
  );
};

export default SauDivider;
