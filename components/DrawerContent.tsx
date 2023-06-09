import { View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Avatar, Caption, Drawer, Text } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
//@ts-expect-error
import Icon from "react-native-vector-icons/SimpleLineIcons";
//@ts-expect-error
import AntDesign from "react-native-vector-icons/AntDesign";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";
//@ts-expect-error
import Entypo from "react-native-vector-icons/Entypo";
//@ts-expect-error
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";

const SignOutIcon = () => <Icon name="logout" size={25} color={"#F85656"} />;
const HomeIcon = () => <Ionicons name="home-outline" size={25} />;
const SettingsIcon = () => <Ionicons name="settings-outline" size={25} />;
const ProfileIcon = () => <AntDesign name="user" size={25} />;
const PaymentMethodIcon = () => <AntDesign name="creditcard" size={25} />;
const ProgramareIcon = () => <AntDesign name="calendar" size={25} />;

export function DrawerContent(): React.ReactNode {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView>
        {/* Main content */}
        {/* Avatar + name */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <Avatar.Image
            source={{
              uri: "https://images.unsplash.com/photo-1595781572981-d63151b232ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
            }}
          />
          {/* User information */}
          <View style={{ flexDirection: "column" }}>
            {/* User full name */}
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                marginLeft: 12,
                textAlign: "left",
              }}
            >
              Jurma Daniel
            </Text>
            {/* User email */}
            <Caption style={{ textAlign: "left", marginLeft: 12 }}>
              d_jurma@yahoo.com
            </Caption>
          </View>
        </View>
        {/* Drawer section with the pages */}
        <Drawer.Section style={{ marginTop: 20 }}>
          <DrawerItem
            label="Home"
            icon={HomeIcon}
            //@ts-expect-error
            onPress={() => navigation.navigate("Home")}
          />
          <DrawerItem
            label="Profil"
            icon={ProfileIcon}
            //@ts-expect-error
            onPress={() => navigation.navigate("Profile")}
          />
          <DrawerItem
            label="Programarile mele"
            icon={ProgramareIcon}
            //@ts-expect-error
            onPress={() => navigation.navigate("IstoricProgramari")}
          />
          <DrawerItem
            label="Istoric plati"
            icon={PaymentMethodIcon}
            //@ts-expect-error
            onPress={() => navigation.navigate("Payments")}
          />
          <DrawerItem
            label="Setari"
            icon={SettingsIcon}
            //@ts-expect-error
            onPress={() => navigation.navigate("Setari")}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      {/* Bottom Drawer section */}
      <Drawer.Section>
        <DrawerItem
          label="Logout"
          labelStyle={{ color: "#F85656" }}
          icon={SignOutIcon}
          onPress={() => navigation.navigate("Login")}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
}
