import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";
import { useDispatch, useSelector } from "react-redux";
import { frizeriSlice } from "../redux/frizeriSlice";

interface ButonProp {
  id: number;
}

const ProgramareButonPentruCardFromSearchbar = ({ id }: ButonProp) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        //update selected frizer
        dispatch(frizeriSlice.actions.setSelectedFrizer(id));
        navigation.navigate("Details");
      }}
    >
      <View
        style={{
          height: 40,
          width: 290,
          backgroundColor: "#246BFD",
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
          Programeaza-te
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProgramareButonPentruCardFromSearchbar;
