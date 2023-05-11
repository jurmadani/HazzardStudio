import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { DrawerHeaderProps } from "@react-navigation/drawer";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";
import { BlurView } from "expo-blur";

const MenuIcon = () => <Ionicons name="menu-outline" size={40} color="black" />;

interface DrawerProps {
  navigation: DrawerHeaderProps;
}

const DrawerHeaderHome = ({ navigation }: DrawerProps) => {
  return (
    <SafeAreaView
      style={{
        marginBottom: 20,
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

export default DrawerHeaderHome;
