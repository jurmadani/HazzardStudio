import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { DrawerParams } from "../navigator/DrawerNavigator";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";

const MenuIcon = () => <Ionicons name="menu-outline" size={40} color="black" />;

interface DrawerProps {
  navigation: DrawerHeaderProps;
}

const DrawerHeader = ({ navigation }: DrawerProps) => {
  return (
    <SafeAreaView
      style={{ margin: 20, flexDirection: "row", alignItems: "center" }}
    >
      <TouchableOpacity onPress={() => navigation.navigation.toggleDrawer()}>
        <MenuIcon />
      </TouchableOpacity>
      <View style={{ flexDirection: "column", alignSelf: "flex-end", flex: 1 }}>
        {/* Header text */}
        <Text
          style={{
            fontWeight: "bold",
            textAlign: "right",
            fontSize: 30,
            marginRight: 5,
            marginTop: 10,
          }}
        >
          Buna, Daniel
        </Text>
        {/* Description  text*/}
        <Text
          style={{
            textAlign: "right",
            color: "#C8C8C8",
            marginRight: 5,
            fontSize: 15,
          }}
        >
          alegeti frizerul si programeaza-te
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeader;
