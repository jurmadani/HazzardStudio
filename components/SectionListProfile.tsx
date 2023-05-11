import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { List, Divider } from "react-native-paper";

//@ts-expect-error
import Icon from "react-native-vector-icons/SimpleLineIcons";
//@ts-expect-error
import AntDesign from "react-native-vector-icons/AntDesign";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";

const SignOutIcon = () => <Icon name="logout" size={25} />;
const ProgramareIcon = () => <AntDesign name="calendar" size={25} />;
const SettingsIcon = () => <Ionicons name="settings-outline" size={25} />;
const RightArrowIcon = () => (
  <TouchableOpacity>
    <AntDesign name="right" size={25} />
  </TouchableOpacity>
);
const PaymentMethodIcon = () => <AntDesign name="creditcard" size={25} />;

const SectionListProfile = () => {
  return (
    <View>
      <List.Section style={{ marginLeft: 30, marginRight: 30 }}>
        <List.Item
          title="Programarile mele"
          left={ProgramareIcon}
          right={RightArrowIcon}
        />
        <Divider />
        <List.Item
          title="Plati"
          left={PaymentMethodIcon}
          right={RightArrowIcon}
        />
        <Divider />
        <List.Item title="Setari" left={SettingsIcon} right={RightArrowIcon} />
        <Divider />
        <List.Item title="Logout" left={SignOutIcon} right={RightArrowIcon} />
        <Divider />
      </List.Section>
    </View>
  );
};

export default SectionListProfile;
