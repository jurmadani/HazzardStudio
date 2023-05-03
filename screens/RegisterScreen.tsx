import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import NumeInput from "../components/NumeInput";
import { KeyboardAvoidingView, Stack } from "native-base";
import RegisterEmailInput from "../components/RegisterEmailInput";
import NumarTelefonInput from "../components/NumarTelefonInput";
import RegisterPasswordInput from "../components/RegisterPasswordInput";
import RegisterRetypePasswordInput from "../components/RegisterRetypePasswordInput";
import Checkbox from "../components/Checkbox";
import GreyButton from "../components/GreyButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";
import GoBackArrow from "../components/GoBackArrow";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const RegisterScreen = () => {
  const [secureTextEntryPasswordInput1, setSecureTextEntryPasswordInput1] =
    useState(true);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [secureTextEntryPasswordInput2, setSecureTextEntryPasswordInput2] =
    useState(true);
  const [checked, setChecked] = React.useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <ImageBackground
      source={require("../assets/images/RegisterScreenBackground.png")}
      resizeMode="cover"
      style={{ height: windowHeight + 100, width: windowWidth }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1 }}
          keyboardVerticalOffset={-100}
        >
          <SafeAreaView style={{ justifyContent: "flex-end" }}>
            {/* Go back arrow */}
            <GoBackArrow navigation={navigation} />
            {/* Header */}
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 40,
                fontWeight: "600",
              }}
            >
              Hai sa incepem
            </Text>
            {/* Description */}
            <Text
              style={{
                textAlign: "center",
                alignSelf: "center",
                color: "#C8C8C8",
                fontSize: 14,
                width: 260,
              }}
            >
              creează-ți noul cont și programeaza-te la frizerul tău preferat
            </Text>
            {/* View-ul cu input-urile */}
            <View
              style={{
                backgroundColor: "#D4D4D460",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                width: windowWidth - 60,
                height: windowHeight - 240,
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <ScrollView>
                {/* Stack component for all the form inputs */}
                <Stack space={2}>
                  <NumeInput />
                  <RegisterEmailInput />
                  <NumarTelefonInput />
                  <RegisterPasswordInput
                    value={password1}
                    onChangeText={setPassword1}
                    secureTextEntry={secureTextEntryPasswordInput1}
                    setSecureTextEntry={setSecureTextEntryPasswordInput1}
                  />
                  <RegisterRetypePasswordInput
                    value={password2}
                    onChangeText={setPassword2}
                    secureTextEntry={secureTextEntryPasswordInput2}
                    setSecureTextEntry={setSecureTextEntryPasswordInput2}
                  />
                  <Checkbox
                    checked={checked}
                    setChecked={setChecked}
                    message="Accepta terminii si conditiile"
                  />
                  <GreyButton placeholder="Inregistreaza-te" />
                </Stack>
              </ScrollView>
            </View>
            {/* Footer text cu ai deja cont, si textul cu touchable opacity */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white" }}>Ai deja cont?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text
                  style={{
                    color: "#F2613C",
                    marginLeft: 10,
                    fontWeight: "600",
                  }}
                >
                  Conecteaza-te
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default RegisterScreen;
