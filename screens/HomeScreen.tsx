import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";

const MenuIcon = () => <Ionicons name="menu-outline" size={40} color="black" />;

const HomeScreen = () => {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <SafeAreaView>{/* Header text: the welcome user */}</SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
