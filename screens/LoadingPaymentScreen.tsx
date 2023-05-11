import { View, Text, Animated, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import { Spinner } from "@ui-kitten/components";
import SpinnerAndText from "../components/SpinnerAndText";
import AnimatedLottieView from "lottie-react-native";
import { StackParams } from "../navigator/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const LoadingPaymentScreen = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const [slideInAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      Animated.timing(slideInAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [loading]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Circle loading with text */}
      {loading && <SpinnerAndText />}
      {/* Lottie animation */}
      {!loading && (
        <Animated.View
          style={{
            transform: [
              {
                translateY: slideInAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [150, 0],
                }),
              },
            ],
          }}
        >
          <AnimatedLottieView
            source={require("../assets/animations/PaymentSuccess.json")}
            autoPlay={true}
            resizeMode="cover"
            loop={false}
            style={{ height: 450, width: 450 }}
            onAnimationFinish={() => {
              navigation.navigate("Drawer", { test: "test" });
            }}
          />
        </Animated.View>
      )}
    </View>
  );
};

export default LoadingPaymentScreen;
