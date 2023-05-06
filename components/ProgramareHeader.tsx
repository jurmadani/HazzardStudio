import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
//@ts-expect-error
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import StepProgressBar from "./StepProgressBar";
import { useSelector } from "react-redux";

const GoBackArrowIcon = () => (
  <MaterialIcons name="keyboard-arrow-left" size={40} />
);

interface ProgramareHeaderProps {
  navigation: NativeStackHeaderProps;
}

const ProgramareHeader = ({ navigation }: ProgramareHeaderProps) => {
  const windowWidth = Dimensions.get("window").width;
  //@ts-expect-error
  const headerTitle = useSelector((state) => state.programare.headerTitle);

  return (
    <SafeAreaView>
      {/* First row: icon + header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        {/* Go back arrow  */}
        <TouchableOpacity onPress={() => navigation.navigation.goBack()}>
          <GoBackArrowIcon />
        </TouchableOpacity>
        {/* Header text */}
        <Text
          style={{
            fontWeight: "600",
            fontSize: 22,
          }}
        >
          {headerTitle}
        </Text>
      </View>
      {/* Step progress bar */}
      <StepProgressBar />
    </SafeAreaView>
  );
};

export default ProgramareHeader;
