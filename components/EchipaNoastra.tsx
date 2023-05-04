import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Echipa } from "../data/EchipaData";
import { BlurView } from "expo-blur";

const EchipaNoastra = () => {
  return (
    <View style={{ alignSelf: "flex-start", marginTop: 20 }}>
      {/* Header text */}
      <Text style={{ fontWeight: "bold", fontSize: 25, marginLeft: 25 }}>
        Echipa Noastra
      </Text>
      <FlatList
        bounces={false}
        scrollEnabled={false}
        numColumns={2}
        data={Echipa}
        renderItem={(item) => (
          <TouchableOpacity>
            <View
              style={{
                height: 180,
                width: 156,
                backgroundColor: "white",
                margin: 10,
                borderRadius: 16,
                marginLeft: 20,
              }}
            >
              <Image
                source={item.item.poza}
                style={{
                  height: 180,
                  width: 156,
                  borderRadius: 16,
                }}
              />
              <View
                style={{
                  backgroundColor: "transparent",
                  borderRadius: 12,
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  height: 63,
                  width: 156,
                  overflow: "hidden",
                  bottom: 0,
                  position: "absolute",
                }}
              >
                <BlurView
                  intensity={35}
                  style={StyleSheet.absoluteFill}
                  tint="light"
                />

                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  {item.item.nume}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default EchipaNoastra;
