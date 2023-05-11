import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { BlurView } from "expo-blur";

const MenuIcon = () => <Ionicons name="menu-outline" size={40} color="black" />;

interface DrawerProps {
  navigation: DrawerHeaderProps;
}

const DrawerHeaderProfile = ({ navigation }: DrawerProps) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <BlurView intensity={35} style={StyleSheet.absoluteFill} tint="light" />

      <TouchableOpacity onPress={() => navigation.navigation.toggleDrawer()} style={{marginLeft:20,}}>
        <MenuIcon />
      </TouchableOpacity>
      <View style={{ flexDirection: "column", alignSelf: "flex-end", flex: 1,marginRight:20, }}>
        {/* Header text */}
        <Text
          style={{
            fontWeight: "500",
            textAlign: "right",
            fontSize: 30,
            marginRight: 5,
            marginTop: 10,
          }}
        >
          hazzard
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
          studio
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeaderProfile;
