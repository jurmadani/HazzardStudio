import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import { useDispatch } from "react-redux";
import { programareSlice } from "../redux/programareSlice";
import { Calendar } from "@ui-kitten/components";
import { Chip } from "react-native-paper";
import { Ore } from "../data/oreData";
import ButonProgramareScreen from "../components/ButonProgramareScreen";
import { PaymentMethods } from "../data/PaymentMethods";
import PaymentMethodCard from "../components/PaymentMethodCard";
import PaymentMethodCash from "../components/PaymentMethodCash";
import { KeyboardAvoidingView } from "native-base";
import ServiciiSiPreturi from "../components/ServiciiSiPreturi";
import { Servicii } from "../data/ServiciiData";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParams } from "../navigator/StackNavigator";

const ProgramareScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [date, setDate] = useState(new Date());
  const [selectedChipID, setSelectedChipID] = useState(-1);
  const [selectedPaymentID, setSelectedPaymentID] = useState(-1);
  const [cardValue, setCardValue] = useState("");
  const [focusCardNum, setFocusCardNum] = useState<boolean>(false);
  const [cardDateValue, setCardDateValue] = useState("");
  const [focusCardDateNum, setFocusCardDateNum] = useState<boolean>(false);
  const [selectedServiciuID, setSelectedServiciuID] = useState(-1);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const updateText = (cardNum: string) => {
    setCardValue(cardNum);
  };
  const updateCardDate = (cardNum: string) => {
    setCardDateValue(cardNum);
  };
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get("window").width;

  const headerTitles = [
    {
      id: 0,
      title: "Alege-ti data",
    },
    {
      id: 1,
      title: "Metoda de plata",
    },
    {
      id: 2,
      title: "Plateste",
    },
  ];

  const onStepPress = (position: number) => {
    if (position >= 3) position = 0;
    setCurrentPage(position);
    dispatch(programareSlice.actions.setCurrentPosition(position));
    dispatch(
      programareSlice.actions.setHeaderTitle(
        headerTitles.find((item) => item.id === position)?.title || ""
      )
    );
  };

  {
    /* Dispatch the first header title only when component mounted, just once */
  }
  useEffect(() => {
    dispatch(programareSlice.actions.setHeaderTitle(headerTitles[0].title));
    dispatch(programareSlice.actions.setCurrentPosition(0));
  }, []);

  //dispatch the header title

  return (
    <Swiper
      showsButtons={false}
      autoplay={false}
      index={currentPage}
      showsHorizontalScrollIndicator={false}
      loop={false}
      showsPagination={false}
      scrollEnabled={false}
    >
      {/* Slide1: Programare */}
      <View style={styles.slide1}>
        {/* Calendar */}

        <Calendar
          date={date}
          onSelect={(nextDate) => setDate(nextDate)}
          style={{ marginTop: 20 }}
        />
        {/* Arat orele disponibile pe care client-ul poate sa se programeze */}
        <FlatList
          data={Ore}
          numColumns={3}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{ height: 100, flexGrow: 0, marginTop: 10 }}
          renderItem={({ item }) => (
            <View
              key={item.id}
              style={{
                margin: 5,
              }}
            >
              {/* Container-ul cu ora */}
              <Chip
                textStyle={{
                  flex: 1,
                  textAlign: "center",
                  color: "white",
                }}
                onPress={() => {
                  setSelectedChipID(item.id);
                }}
                style={{
                  height: 40,
                  width: 100,
                  borderRadius: 4,
                  backgroundColor:
                    item.id === selectedChipID ? "#3B60FB" : "#B6B6B6",
                }}
                selected={item.id === selectedChipID ? true : false}
                selectedColor="white"
              >
                {item.ora}:{item.minute}
              </Chip>
            </View>
          )}
        />
        {/* Butonul cu care sa schimbi swiper-ul la slide-ul urmator */}
        {selectedChipID != -1 && (
          <ButonProgramareScreen
            placeholder="Confirma"
            onPressHandler={() => onStepPress(currentPage + 1)}
          />
        )}
      </View>
      {/* Slide-ul 2 pagina de checkout */}
      <View style={styles.slide2}>
        <KeyboardAvoidingView
          behavior="position"
          style={{ flex: 1, alignSelf: "center" }}
          keyboardVerticalOffset={-30}
        >
          <FlatList
            data={PaymentMethods}
            numColumns={2}
            contentContainerStyle={{ alignItems: "center" }}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{
              height: 100,
              flexGrow: 0,
              marginTop: 10,
            }}
            renderItem={({ item }) => (
              <View
                key={item.id}
                style={{
                  margin: 5,
                }}
              >
                {/* Container-ul cu ora */}
                <Chip
                  onPress={() => {
                    setSelectedPaymentID(item.id);
                  }}
                  style={{
                    height: 66,
                    width: 101,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 10,
                    backgroundColor:
                      item.id === selectedPaymentID ? "#3B60FB" : "white",
                  }}
                  selectedColor="white"
                >
                  <Image
                    source={item.Icon}
                    style={{
                      height: 40,
                      width: 40,
                      alignSelf: "center",
                      tintColor:
                        item.id === selectedPaymentID ? "white" : "black",
                    }}
                  />
                </Chip>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    fontSize: 15,
                    marginTop: 5,
                  }}
                >
                  {item.NumePayment}
                </Text>
              </View>
            )}
          />

          {selectedPaymentID === 1 && (
            <View style={{ alignItems: "center" }}>
              <PaymentMethodCard
                cardValue={cardValue}
                focusCardNum={focusCardNum}
                setFocusCardNum={setFocusCardNum}
                cardDateValue={cardDateValue}
                focusCardDateNum={focusCardDateNum}
                setFocusCardDateNum={setFocusCardDateNum}
                updateText={updateText}
                updateCardDate={updateCardDate}
              />
              <ButonProgramareScreen
                placeholder="Continua"
                onPressHandler={() => onStepPress(currentPage + 1)}
              />
            </View>
          )}

          {selectedPaymentID === 2 && (
            <View>
              <PaymentMethodCash />
              <ButonProgramareScreen
                placeholder="Continua"
                onPressHandler={() => onStepPress(currentPage + 1)}
              />
            </View>
          )}
        </KeyboardAvoidingView>
      </View>
      {/* Slide-ul 3 pagina de finalizare si de alegere a serviciului */}
      <ScrollView style={{ flex: 1, backgroundColor: "#FAFAFB" }}>
        <View style={styles.slide3}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              alignSelf: "flex-start",
              marginLeft: 25,
              marginTop: 20,
            }}
          >
            Alege serviciul dorit
          </Text>
          <ServiciiSiPreturi
            displayHeader={false}
            selectedServiciuID={selectedServiciuID}
            setSelectedServiciuID={setSelectedServiciuID}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              alignSelf: "flex-start",
              marginLeft: 30,
              marginTop: 20,
            }}
          >
            Informatii despre programare
          </Text>
          <View
            style={{
              marginTop: 20,
              width: windowWidth - 55,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            {/* View-ul cu informatii */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
                  color: "#DCDFE3",
                  fontWeight: "500",
                }}
              >
                Serviciu
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  flex: 1,
                  marginRight: 10,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {Servicii[selectedServiciuID - 1]?.NumeServiciu}
              </Text>
            </View>
            {/* Informatie pret */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
                  color: "#DCDFE3",
                  fontWeight: "500",
                }}
              >
                Pret
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  flex: 1,
                  marginRight: 10,
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {Servicii[selectedServiciuID - 1]?.pret} ron
              </Text>
            </View>
            {/* Metoda de plata */}
            <View
              style={{
                height: 1,
                width: windowWidth - 55,
                backgroundColor: "#DCDFE3",
              }}
            />
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                color: "#DCDFE3",
                fontWeight: "500",
                textAlign: "center",
                flex: 1,
              }}
            >
              Metoda plata
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/images/mastercard.png")}
                style={{ width: 35, height: 35, marginRight: 20 }}
              />
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                **** 1234
              </Text>
            </View>
          </View>
          <ButonProgramareScreen
            placeholder="Finalizeaza"
            onPressHandler={() =>
              navigation.navigate("LoadingPayment", {
                text: "test",
              })
            }
          />
        </View>
      </ScrollView>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  slide2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  slide3: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F6F6F6",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ProgramareScreen;
