import { View, Text } from "react-native";
import React, { useState } from "react";
import StepIndicator from "react-native-step-indicator";
import { useSelector } from "react-redux";

const labels = ["Programare", "Plata", "Finalizare"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#3B60FB",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "transparent",
  stepStrokeUnFinishedColor: "#dedede",
  separatorFinishedColor: "#3B60FB",
  separatorUnFinishedColor: "#dedede",
  stepIndicatorFinishedColor: "#3B60FB",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 0,
  currentStepIndicatorLabelFontSize: 0,
  stepIndicatorLabelCurrentColor: "transparent",
  stepIndicatorLabelFinishedColor: "transparent",
  stepIndicatorLabelUnFinishedColor: "transparent",
  labelColor: "#B6B6B6",
  labelSize: 13,
  currentStepLabelColor: "black",
};

const StepProgressBar = () => {
  const currentPosition = useSelector(
    //@ts-expect-error
    (state) => state.programare.currentPosition
  );

  return (
    <StepIndicator
      currentPosition={currentPosition}
      customStyles={customStyles}
      labels={labels}
      stepCount={3}
    />
  );
};

export default StepProgressBar;
