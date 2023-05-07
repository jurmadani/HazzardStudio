import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Servicii } from "../data/ServiciiData";

interface ServiciiSiPreturiProps {
  displayHeader?: boolean;
  selectedServiciuID?: number;
  setSelectedServiciuID?: React.Dispatch<React.SetStateAction<number>>;
  addMarginTop?: boolean;
}

const ServiciiSiPreturi = ({
  displayHeader,
  selectedServiciuID,
  setSelectedServiciuID,
  addMarginTop,
}: ServiciiSiPreturiProps) => {
  const columns = 1; // number of columns
  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={{ alignSelf: "flex-start", marginTop: addMarginTop ? 20 : 0 }}>
      <Text style={{ fontWeight: "bold", fontSize: 25, marginLeft: 25 }}>
        {displayHeader ? " Serviciile Noastre" : ""}
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: 20,
          marginTop: addMarginTop ? 10 : 0,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {Servicii.map((item) => (
          <View
            key={item.id}
            style={{
              width: `${100 / columns}%`,
              marginBottom: 10,
            }}
          >
            {/* mapam doar primele 2 servicii */}
            {item.id <= 2 && (
              <View>
                <TouchableOpacity
                  onPress={() => setSelectedServiciuID?.(item.id)}
                >
                  <View
                    style={{
                      backgroundColor:
                        selectedServiciuID === item.id ? "#3B60FB" : "#DCDFE3",
                      height: 75,
                      width: windowWidth - 60,
                      marginHorizontal: 5,
                      borderRadius: 8,
                      justifyContent: "center",
                    }}
                  >
                    {/* Serviciu view */}
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 20,
                      }}
                    >
                      {/* Iconita serviciu */}
                      <Image
                        source={item.Icon}
                        style={{
                          height: 40,
                          width: 40,
                          tintColor:
                            selectedServiciuID === item.id
                              ? "white"
                              : "#877547",
                        }}
                      />
                      {/* denumire serviciu */}
                      <View style={{ flexDirection: "column" }}>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            marginLeft: 15,
                            color:
                              selectedServiciuID === item.id
                                ? "white"
                                : "black",
                          }}
                        >
                          {item.NumeServiciu}
                        </Text>
                        {/* Durata serviciu */}
                        <Text
                          style={{
                            color:
                              selectedServiciuID === item.id
                                ? "white"
                                : "#808080",
                            marginLeft: 15,
                          }}
                        >
                          45 min
                        </Text>
                      </View>
                      {/* Pret */}
                      <View
                        style={{
                          justifyContent: "center",
                          flex: 1,
                          alignItems: "flex-end",
                          marginRight: 15,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 21,
                            color:
                              selectedServiciuID === item.id
                                ? "white"
                                : "black",
                          }}
                        >
                          {item.pret} lei
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ServiciiSiPreturi;
