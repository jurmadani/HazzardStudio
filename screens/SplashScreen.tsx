import { StyleSheet, View, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { Video, ResizeMode } from "expo-av";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Splashscreen ended");
      navigation.navigate("Onboarding");
    }, 1700);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Video
        style={{ flex: 1, height: windowHeight, width: windowWidth }}
        source={require("../assets/videos/Splashscreen-Hazzard_v2.mp4")}
        isLooping={false}
        shouldPlay={true}
        resizeMode={ResizeMode.CONTAIN}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
