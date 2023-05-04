import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Paragraph } from "react-native-paper";
import GreyButton from "./GreyButton";

interface DiscountCardProps {
  title: string;
  description: string;
  buttonTitle: string;
}

const DiscountCard = ({
  title,
  description,
  buttonTitle,
}: DiscountCardProps) => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <LinearGradient
      colors={["#33302A", "#574747"]}
      style={{ borderRadius: 16, marginTop: 30 }}
    >
      <View
        style={{
          width: windowWidth - 50,
          height: 138,
          borderRadius: 16,
        }}
      >
        <Title
          style={{
            color: "white",
            fontWeight: "500",
            marginLeft: 20,
            marginTop: 10,
          }}
        >
          {title}
        </Title>
        <Paragraph
          style={{ color: "#B8A39B", fontWeight: "400", marginLeft: 20 }}
        >
          {description}
        </Paragraph>
        <TouchableOpacity style={{ marginLeft: 20, marginTop: 10 }}>
          <View
            style={{
              backgroundColor: "#ECBB6A",
              height: 50,
              width: windowWidth - 200,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              {buttonTitle}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default DiscountCard;
