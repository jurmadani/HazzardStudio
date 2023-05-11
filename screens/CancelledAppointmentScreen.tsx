import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ProgramariCancelledData } from "../data/ProgramariCancelledData";
import ProgramariCancelledCard from "../components/ProgramariCancelledCard";

const CancelledAppointmentScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, alignItems: "center" }}>
        {ProgramariCancelledData.map((item, index) => (
          <ProgramariCancelledCard item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default CancelledAppointmentScreen;
