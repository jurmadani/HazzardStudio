import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UpcomingAppointmentScreen from "../screens/UpcomingAppointmentScreen";
import CompletedAppointmentScreen from "../screens/CompletedAppointmentScreen";
import CancelledAppointmentScreen from "../screens/CancelledAppointmentScreen";

export type MaterialTopTabParams = {
  Upcoming: any;
  Completed: any;
  Cancelled: any;
};

const MaterialTopTab = createMaterialTopTabNavigator<MaterialTopTabParams>();

const MaterialTopTabNavigator = () => {
  return (
    <MaterialTopTab.Navigator style={{ marginTop: 120 }}>
      <MaterialTopTab.Screen
        name="Upcoming"
        component={UpcomingAppointmentScreen}
      />
      <MaterialTopTab.Screen
        name="Completed"
        component={CompletedAppointmentScreen}
      />
      <MaterialTopTab.Screen
        name="Cancelled"
        component={CancelledAppointmentScreen}
      />
    </MaterialTopTab.Navigator>
  );
};

export default MaterialTopTabNavigator;
