import { View, Text, ScrollView } from "react-native";
import React from "react";
import SectionListSettings from "../components/SectionListSettings";

const SettingsScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginTop: 120,
        }}
      >
        <Text style={{ marginLeft: 30, fontWeight: "bold", fontSize: 28 }}>
          Setari si confidentialitate
        </Text>
        <SectionListSettings />
        <Text
          style={{
            color: "#CACACA",
            textAlign: "center",
            flex: 1,
            marginTop: 120,
          }}
        >
          Versiunea 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
