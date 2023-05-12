import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import { EchipaProps } from "../data/EchipaData";
import ProgramareButonPentruCardFromSearchbar from "./ProgramareButonPentruCardFromSearchbar";
interface BarberCardProp extends EchipaProps {
  barber: EchipaProps;
}
const windowWidth = Dimensions.get("window").width;

const BarberCardFromSearchBar = ({ barber }: BarberCardProp) => {
  return (
    //Container view
    <View
      style={{
        height: 150,
        width: windowWidth - 50,
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        {/* Imagine barber */}
        <Image
          source={barber.poza}
          style={{ height: 80, width: 80, margin: 10, borderRadius: 10 }}
        />
        <View>
          {/* Nume barber */}
          <Text style={{ fontWeight: "bold", fontSize: 19, marginTop: 10 }}>
            {barber.nume}
          </Text>
          {/* Review-uri imagine + numar reviewuri + scor */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/images/Rating.png")}
              style={{
                tintColor: "#FFCA54",
                height: 25,
                width: 70,
              }}
            />
            <Text style={{ color: "#808080", marginLeft: 10 }}>
              9,5 (120 Reviewer)
            </Text>
          </View>
          <Text>Servicii: Tuns, Tuns + barba</Text>
        </View>
      </View>
      <ProgramareButonPentruCardFromSearchbar id={barber.id} />
    </View>
  );
};

export default BarberCardFromSearchBar;
