import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { List, Divider } from "react-native-paper";
//@ts-expect-error
import Icon from "react-native-vector-icons/SimpleLineIcons";
//@ts-expect-error
import AntDesign from "react-native-vector-icons/AntDesign";
//@ts-expect-error
import Ionicons from "react-native-vector-icons/Ionicons";
//@ts-expect-error
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";

const SignOutIcon = () => <Icon name="logout" size={25} color={"#F85656"} />;
const ProfileIcon = () => <AntDesign name="user" size={25} />;
const PrivacyIcon = () => <AntDesign name="lock" size={25} />;
const LanguageIcon = () => <FontAwesome name="language" size={25} />;
const InformationIcon = () => <AntDesign name="infocirlceo" size={25} />;
const HelpCenterIcon = () => <AntDesign name="questioncircleo" size={25} />;
const NotificationsIcon = () => (
  <Ionicons name="notifications-outline" size={25} />
);
const RightArrowIcon = () => (
  <TouchableOpacity>
    <AntDesign name="right" size={25} />
  </TouchableOpacity>
);
const PaymentMethodIcon = () => <AntDesign name="creditcard" size={25} />;

const SectionListSettings = () => {
  return (
    <View>
      <List.Section style={{ marginLeft: 30, marginRight: 30 }}>
        <List.Item
          title="Administreaza contul"
          left={ProfileIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error
              onPressHandler={() => null}
            />
          )}
        />
        <Text style={{ margin: 10, color: "#CACACA" }}>
          Parola,securitate,detalii personale,reclame.
        </Text>
        <Divider />
        <List.Item
          title="Notificari"
          left={NotificationsIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error

              onPressHandler={() => null}
            />
          )}
        />
        <Divider />
        <List.Item
          title="Privacy"
          left={PrivacyIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error

              onPressHandler={() => null}
            />
          )}
        />
        <Divider />

        <List.Item
          title="Limba"
          left={LanguageIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error

              onPressHandler={() => null}
            />
          )}
        />
        <Divider />

        <List.Item
          title="Help center"
          left={HelpCenterIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error

              onPressHandler={() => null}
            />
          )}
        />
        <Divider />

        <List.Item
          title="Despre"
          left={InformationIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error

              onPressHandler={() => null}
            />
          )}
        />
        <Divider />

        <List.Item
          title="Logout"
          titleStyle={{ color: "#F85656" }}
          left={SignOutIcon}
          right={(props) => (
            <RightArrowIcon
              //@ts-expect-error

              onPressHandler={() => null}
            />
          )}
        />
        <Divider />
      </List.Section>
    </View>
  );
};

export default SectionListSettings;
