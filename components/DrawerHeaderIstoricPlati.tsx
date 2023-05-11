import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerHeaderProps } from "@react-navigation/drawer";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";

interface DrawerProps {
  navigation: DrawerHeaderProps;
}

const MenuIcon = () => <Ionicons name="menu-outline" size={40} color="black" />;

const DrawerHeaderIstoricPlati = ({ navigation }: DrawerProps) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigation.toggleDrawer()}
        style={{ marginLeft: 20 }}
      >
        <MenuIcon />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "column",
          alignSelf: "flex-end",
          flex: 1,
          marginRight: 20,
        }}
      >
        {/* Header text */}
        <Text
          style={{
            fontWeight: "500",
            textAlign: "center",
            fontSize: 30,
            marginRight: 5,
            marginTop: 10,
          }}
        >
          Programari
        </Text>

        {/* Description  text*/}
        <Text
          style={{
            textAlign: "center",
            color: "#C8C8C8",
            marginRight: 5,
            fontSize: 15,
          }}
        >
          vezi istoricul tau
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeaderIstoricPlati;
