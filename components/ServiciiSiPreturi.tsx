import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Servicii } from "../data/ServiciiData";

const ServiciiSiPreturi = () => {
  const columns = 1; // number of columns
  const windowWidth = Dimensions.get("window").width;

  return (
    <View style={{ alignSelf: "flex-start", marginTop: 20 }}>
      <Text style={{ fontWeight: "bold", fontSize: 25, marginLeft: 25 }}>
        Serviciile Noastre
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: 20,
          marginTop: 10,
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
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: "#DCDFE3",
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
                        style={{ height: 40, width: 40, tintColor: "#877547" }}
                      />
                      {/* denumire serviciu */}
                      <View style={{ flexDirection: "column" }}>
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            marginLeft: 15,
                          }}
                        >
                          {item.NumeServiciu}
                        </Text>
                        {/* Durata serviciu */}
                        <Text style={{ color: "#808080", marginLeft: 15 }}>
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
                        <Text style={{ fontSize: 21 }}>{item.pret} lei</Text>
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
