import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Video, ResizeMode } from "expo-av";
import { BlurView } from "expo-blur";
import { useFonts } from "expo-font";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import Checkbox from "../components/Checkbox";
import GreyButton from "../components/GreyButton";
import SauDivider from "../components/SauDivider";
import GoogleButton from "../components/GoogleButton";
import AppleButton from "../components/AppleButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const LoginScreen = () => {
  //incarcam font-ul pentru header
  let [fontsLoaded] = useFonts({
    "Urbanist-Regular": require("../assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-ExtraLight": require("../assets/fonts/Urbanist-ExtraLight.ttf"),
    "Urbanist-Light": require("../assets/fonts/Urbanist-Light.ttf"),
  });

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = React.useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  if (fontsLoaded)
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          {/* Video-ul din background cu speed de 0.7x */}
          <Video
            style={{
              flex: 1,
              height: windowHeight,
              width: windowWidth,
              position: "absolute",
            }}
            source={require("../assets/videos/VideoBackgroundLoginScreen-Dark.mp4")}
            isLooping={true}
            shouldPlay={true}
            resizeMode={ResizeMode.COVER}
            isMuted={true}
            rate={0.7}
          />
          {/* O componenta blurview cu care sa bluram video-ul */}
          <BlurView
            intensity={45}
            style={StyleSheet.absoluteFill}
            tint="dark"
          />
          <KeyboardAvoidingView
            behavior="position"
            style={{ flex: 1 }}
            keyboardVerticalOffset={-170}
          >
            {/* View-ul pentru header */}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 60,
              }}
            >
              <Text
                style={{
                  fontSize: 41,
                  color: "white",
                  fontFamily: "Urbanist-Regular",
                }}
              >
                hazzard
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  color: "white",
                  fontFamily: "Urbanist-Light",
                }}
              >
                studio
              </Text>
            </View>
            {/* View-ul container in care vom avea email-box si password-box cu restul butoanelor */}
            <View
              style={{
                height: windowHeight / 2 + 80,
                width: windowWidth - 60,
                backgroundColor: "transparent",
                alignSelf: "center",
                marginTop: 20,
                borderRadius: 13,
                overflow: "hidden",
              }}
            >
              {/* Blurview pentru a da blura background-ul transparent pentru a scoate in evidenta containerul-ul */}
              <BlurView
                intensity={45}
                style={StyleSheet.absoluteFill}
                tint="light"
              />
              {/* Text header */}
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 32,
                  alignSelf: "center",
                  marginTop: 20,
                }}
              >
                Bun venit!
              </Text>
              {/* Text description */}
              <Text
                style={{
                  color: "#C8C8C8",
                  fontSize: 14,
                  alignSelf: "center",
                  marginTop: 5,
                }}
              >
                Rămâneți conectat cu contul dvs.
              </Text>
              {/* Email input */}
              <EmailInput value={email} onChangeText={setEmail} />
              {/* Password input */}
              <PasswordInput
                secureTextEntry={secureTextEntry}
                value={password}
                onChangeText={setPassword}
                setSecureTextEntry={setSecureTextEntry}
              />
              {/* Checkbox cu remember me */}
              <Checkbox
                checked={checked}
                setChecked={setChecked}
                message="Remember me"
                navigationText="Ai uitat parola?"
                navigation={navigation}
              />
              {/* Login button */}
              <GreyButton placeholder="Conecteaza-te" navigation={navigation} screenToNavigate="Drawer"/>
              {/* Sau divider */}
              <SauDivider />
              {/* Facebook & Google login view */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <GoogleButton />
                <AppleButton />
              </View>
            </View>
            {/* Nu ai cont text */}
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 15,
              }}
            >
              <Text style={{ color: "white" }}>Nu ai cont?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text
                  style={{
                    color: "#F2613C",
                    marginLeft: 10,
                    fontWeight: "600",
                  }}
                >
                  Inregistreaza-te
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
