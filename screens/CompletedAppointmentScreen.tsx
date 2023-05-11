import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { ProgramariCompletedData } from "../data/ProgramariCompletedData";
import ProgramariCompletedCard from "../components/ProgramariCompletedCard";

const CompletedAppointmentScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, alignItems: "center" }}>
        {ProgramariCompletedData.map((item, index) => (
          <ProgramariCompletedCard item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default CompletedAppointmentScreen;
