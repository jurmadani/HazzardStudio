import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import React from "react";
import GoBackArrow from "../components/GoBackArrow";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";
import RegisterEmailInput from "../components/RegisterEmailInput";
import GreyButton from "../components/GreyButton";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <ImageBackground
      source={require("../assets/images/RegisterScreenBackground.png")}
      resizeMode="cover"
      style={{ height: windowHeight + 100, width: windowWidth }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          {/* Go back arrow */}
          <GoBackArrow navigation={navigation} />
          {/* Header text */}
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 32,
              fontWeight: "600",
              marginTop: 35,
            }}
          >
            Recupereaza-ti parola
          </Text>
          {/* The view where the email input is */}
          <View
            style={{
              backgroundColor: "#D4D4D460",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              width: windowWidth - 60,
              height: 180,
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            <RegisterEmailInput />
            <GreyButton placeholder="Trimite link resetare parola" />
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;
