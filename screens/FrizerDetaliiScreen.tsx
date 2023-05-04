import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import React from "react";
import GoBackArrow from "../components/GoBackArrow";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";
import ServiciileNoastre from "../components/ServiciileNoastre";
import GreyButton from "../components/GreyButton";
import ServiciiSiPreturi from "../components/ServiciiSiPreturi";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const FrizerDetaliiScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {/* imaginea frizerului */}
        <Image
          source={require("../assets/images/OvidiuVirlan.png")}
          style={{
            width: windowWidth,
            height: windowHeight / 2.2,
          }}
        />
        {/* Nume frizer */}

        <Text
          style={{
            fontWeight: "500",
            fontSize: 24,
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          Ovidiu Virlan
        </Text>
        {/* Review-uri */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/images/Rating.png")}
            style={{
              tintColor: "#FFCA54",
              height: 30,
              width: 80,
              marginLeft: 20,
            }}
          />
          <Text style={{ color: "#808080", marginLeft: 10 }}>
            9,5 (120 Reviewer)
          </Text>
        </View>
        {/* Descriere frizer */}
        <Text
          style={{
            color: "#808080",
            alignItems: "center",
            marginLeft: 20,
            textAlign: "left",
            width: windowWidth - 30,
          }}
        >
          Dacă sunteți în căutarea unei experiențe de bărbierit și coafat de
          lux, atunci Ovidiu Vîrlan este alegerea perfectă. El vă va ajuta să vă
          simțiți și să arătați bine, oferindu-vă o experiență de îngrijire
          personală de calitate superioară în fiecare vizită.
        </Text>
        {/* Preturi si servicii frizer */}
        <ServiciiSiPreturi />
        {/* Programeaza-te button */}
        <View style={{ marginBottom: 60 }}>
          <GreyButton
            placeholder="Programeaza-te"
            radius={4}
            buttonWidth={windowWidth - 100}
            placeholderSize={17}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FrizerDetaliiScreen;
