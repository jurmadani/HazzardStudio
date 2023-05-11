import { View, Text, ScrollView, Dimensions } from "react-native";
import React from "react";
import SvgComponent from "../components/CreditCardSVG";
import AdaugaCardNouButton from "../components/AdaugaCardNouButton";
import AnimatedLottieView from "lottie-react-native";

const windowWidth = Dimensions.get("window").width;

const PaymentsScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          marginTop: 120,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            width: windowWidth,
            fontWeight: "bold",
            fontSize: 19,
            textAlign: "left",
            marginLeft: 50,
          }}
        >
          Carduri salvate
        </Text>
        {/* Dummy svg card for UI */}
        <View style={{ alignSelf: "center" }}>
          <SvgComponent />
        </View>
        {/* Add new card button */}
        <AdaugaCardNouButton />
        <Text
          style={{
            width: windowWidth,
            fontWeight: "bold",
            fontSize: 19,
            textAlign: "left",
            marginLeft: 50,
          }}
        >
          Istoric tranzactii
        </Text>
        <AnimatedLottieView
          source={require("../assets/animations/TumbleweedAnimation.json")}
          resizeMode="contain"
          autoPlay
          style={{ height: 200, width: windowWidth - 80, marginTop: 10 }}
        />
        <Text
          style={{
            fontWeight: "bold",
            color: "#CACACA",
            fontSize: 16,
            marginTop: 20,
          }}
        >
          Nu exista plati inregistrate
        </Text>
      </View>
    </ScrollView>
  );
};

export default PaymentsScreen;
