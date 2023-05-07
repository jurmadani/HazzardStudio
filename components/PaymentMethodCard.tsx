import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CardNumberTextInput from "./CardNumberInput";
import CardDateTextInput from "./CardDateInput";
import CardHolderNameInput from "./CardHolderNameInput";
import CVVCardInput from "./CVVCardInput";

interface PaymentMethodProps {
  cardValue: string;
  setCardValue?: React.Dispatch<React.SetStateAction<string>>;
  focusCardNum: boolean;
  setFocusCardNum: React.Dispatch<React.SetStateAction<boolean>>;
  cardDateValue: string;
  setCardDateValue?: React.Dispatch<React.SetStateAction<string>>;
  focusCardDateNum: boolean;
  setFocusCardDateNum: React.Dispatch<React.SetStateAction<boolean>>;
  updateText: (cardNum: string) => void;
  updateCardDate: (cardNum: string) => void;
}

const PaymentMethodCard = ({
  cardValue,
  setCardValue,
  focusCardNum,
  setFocusCardNum,
  cardDateValue,
  setCardDateValue,
  focusCardDateNum,
  setFocusCardDateNum,
  updateText,
  updateCardDate,
}: PaymentMethodProps) => {
  return (
    <View style={{ alignItems: "flex-start" }}>
      {/* CardNumber input */}
      <CardNumberTextInput
        autoFocus={true}
        focus={focusCardNum}
        onFocus={() => setFocusCardNum(true)}
        onBlur={(e) => {
          setFocusCardNum(false);
        }}
        label="Numarul cardului"
        errorColor={"red"}
        defaultBorderColor={"#ddd"}
        inputWrapStyle={{
          height: 60,
          width: "90%",
          borderRadius: 10,
          backgroundColor: "#EEF1F4",
        }}
        labelStyle={{
          marginTop: 30,
        }}
        inputStyle={{
          color: "#333",
        }}
        defaultValue={cardValue}
        focusColor={"blue"}
        placeholder={"0000 0000 0000 0000"}
        updateTextVal={(text) => {
          updateText(text);
        }}
      />
      {/* Name input */}
      <Text style={{ marginLeft: 10 }}>Detinatorul cardului</Text>

      <CardHolderNameInput />
      {/* Card date input + CVV */}
      <View style={{ flexDirection: "row" }}>
        <CardDateTextInput
          errorColor={"red"}
          labelColor={"#ddd"}
          focusColor={"#1c32a0"}
          defaultBorderColor={"#ddd"}
          placeholder={"MM/YY"}
          label={"Data expirare"}
          focus={focusCardDateNum}
          updateCardDateText={(t) => {
            updateCardDate(t);
          }}
          onFocus={() => setFocusCardDateNum(true)}
          labelStyle={{
            color: "#333",
            fontWeight: "400",
            marginTop: 10,
          }}
          inputWrapStyle={{
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "#EEF1F4",
          }}
          placeholderTextColor={"#ccc"}
          value={cardDateValue}
          defaultValue={cardDateValue}
          inputStyle={{
            color: "#333",
            fontWeight: "bold",
          }}
        />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text
            style={{
              textAlign: "center",
              width: 60,
              marginTop: 5,
            }}
          >
            CVV
          </Text>
          <CVVCardInput />
        </View>
      </View>
    </View>
  );
};

export default PaymentMethodCard;
