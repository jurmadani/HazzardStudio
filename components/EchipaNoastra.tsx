import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";
import { useSelector, useDispatch } from "react-redux";
import { frizeriSlice } from "../redux/frizeriSlice";

const EchipaNoastra = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  //@ts-expect-error
  const echipa = useSelector((state) => state.frizeri.frizeri);
  const dispatch = useDispatch();

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
        data={echipa}
        renderItem={(item) => (
          <TouchableOpacity
            onPress={() => {
              //update selected frizer
              dispatch(frizeriSlice.actions.setSelectedFrizer(item.item.id));
              navigation.navigate("Details");
            }}
          >
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
