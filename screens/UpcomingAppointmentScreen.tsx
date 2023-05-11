import { View, Text, Image } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

const UpcomingAppointmentScreen = () => {
  return (
    <View
      style={{
        marginTop: 120,
        alignItems: "center",
        flex: 1,
      }}
    >
      {/* No data found animation */}
      <AnimatedLottieView
        source={require("../assets/animations/NoDataFoundAnimation.json")}
        autoPlay={true}
        loop={false}
        speed={0.4}
        resizeMode="contain"
        style={{ height: 180, width: 180 }}
      />
      {/* Header text */}
      <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 20 }}>
        Nu ai programari viitoare
      </Text>
      {/* Description text */}
      <Text
        style={{
          textAlign: "center",
          color: "#CDCDCD",
          marginTop: 10,
          fontSize: 13,
        }}
      >
        Alegeti frizerul preferat si programeaza-te la o sedinta
      </Text>
    </View>
  );
};

export default UpcomingAppointmentScreen;
