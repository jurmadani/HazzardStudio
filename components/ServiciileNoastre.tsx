import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Servicii } from "../data/ServiciiData";

const ServiciileNoastre = () => {
  return (
    <View style={{ alignSelf: "flex-start", marginTop: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 25, marginLeft: 25 }}>
        Serviciile Noastre
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginLeft: 20,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        {Servicii.map((item) => (
          <View key={item.id} style={{ alignItems: "center" }}>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#DCDFE3",
                  height: 75,
                  width: 75,
                  marginHorizontal: 5,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.Icon}
                  style={{ height: 40, width: 40, tintColor: "#877547" }}
                />
              </View>
            </TouchableOpacity>

            <Text style={{ fontWeight: "400", marginTop: 10 }}>
              {item.NumeServiciu}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ServiciileNoastre;
