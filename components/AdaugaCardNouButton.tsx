import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
//@ts-expect-error
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const windowWidth = Dimensions.get("window").width;
const AddCardIcon = () => (
  <MaterialCommunityIcons name="credit-card-plus-outline" size={25} />
);

const AdaugaCardNouButton = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: windowWidth - 70,
          height: 50,
          borderWidth: 3,
          borderStyle: "dotted",
          borderColor: "#CACACA",
          borderRadius: 10,
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <AddCardIcon />

        <Text style={{ fontWeight: "bold",margin:10, }}>Adauga card nou</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AdaugaCardNouButton;
