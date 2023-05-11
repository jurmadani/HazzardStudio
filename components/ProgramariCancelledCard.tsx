import {
  View,
  Text,
  ListRenderItemInfo,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { ProgramariCompletedProps } from "../data/ProgramariCompletedData";
import CompletedCard from "./StatusAppointmentCard";
import { Divider } from "react-native-paper";
import ButonCompletedAppointmentScreen from "./ButonCompletedAppointmentScreen";
import StatusAppointmentCard from "./StatusAppointmentCard";

interface CardProps {
  item: ProgramariCompletedProps;
}

const windowWidth = Dimensions.get("window").width;

const ProgramariCancelledCard = ({ item }: CardProps) => {
  return (
    <View
      style={{
        width: windowWidth - 50,
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        {/* Imaginea barberului */}
        <Image
          source={item.ImagineBarber}
          style={{ height: 100, width: 100, margin: 10, borderRadius: 20 }}
        />
        <View style={{ justifyContent: "center", margin: 2 }}>
          {/* Nume barber */}

          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            {item.NumeBarber}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {/* Serviciu */}
            <Text>{item.Serviciu} -</Text>
            {/* Completed card */}
            <StatusAppointmentCard status="cancelled" />
          </View>
          {/* Data + ora */}
          <Text style={{ marginTop: 10 }}>
            {item.Data} | {item.Ora}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProgramariCancelledCard;
