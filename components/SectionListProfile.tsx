import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { List, Divider } from "react-native-paper";

//@ts-expect-error
import Icon from "react-native-vector-icons/SimpleLineIcons";
//@ts-expect-error
import AntDesign from "react-native-vector-icons/AntDesign";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";

interface RightArrowIconProp {
  onPressHandler?: () => void;
}

const SignOutIcon = () => <Icon name="logout" size={25} />;
const ProgramareIcon = () => <AntDesign name="calendar" size={25} />;
const SettingsIcon = () => <Ionicons name="settings-outline" size={25} />;
const RightArrowIcon = ({ onPressHandler }: RightArrowIconProp) => (
  <TouchableOpacity onPress={onPressHandler}>
    <AntDesign name="right" size={25} />
  </TouchableOpacity>
);
const PaymentMethodIcon = () => <AntDesign name="creditcard" size={25} />;

const SectionListProfile = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <View>
      <List.Section style={{ marginLeft: 30, marginRight: 30 }}>
        <List.Item
          title="Programarile mele"
          left={ProgramareIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error
              onPressHandler={() => navigation.navigate("Payments")}
            />
          )}
        />
        <Divider />
        <List.Item
          title="Plati"
          left={PaymentMethodIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error

              onPressHandler={() => navigation.navigate("Payments")}
            />
          )}
        />
        <Divider />
        <List.Item
          title="Setari"
          left={SettingsIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error

              onPressHandler={() => navigation.navigate("Payments")}
            />
          )}
        />
        <Divider />
        <List.Item
          title="Logout"
          left={SignOutIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error

              onPressHandler={() => navigation.navigate("Payments")}
            />
          )}
        />
        <Divider />
      </List.Section>
    </View>
  );
};

export default SectionListProfile;
