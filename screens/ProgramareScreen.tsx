import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import { useDispatch } from "react-redux";
import { programareSlice } from "../redux/programareSlice";
import { Calendar } from "@ui-kitten/components";
import { Chip } from "react-native-paper";
import { Ore } from "../data/oreData";
import ButonProgramareScreen from "../components/ButonProgramareScreen";

const ProgramareScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [date, setDate] = useState(new Date());
  const [selectedChipID, setSelectedChipID] = useState(-1);
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

  const dispatch = useDispatch();
  {
    /* Dispatch the first header title only when component mounted, just once */
  }
  useEffect(() => {
    dispatch(programareSlice.actions.setHeaderTitle(headerTitles[0].title));
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
      <View style={styles.slide2}>
        <Text style={styles.text}>Page2</Text>
        <Button
          title="press me"
          onPress={() => {
            onStepPress(currentPage + 1);
          }}
        />
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>Page3</Text>
        <Button
          title="press me"
          onPress={() => {
            onStepPress(currentPage + 1);
          }}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAFAFB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFB",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFAFB",
  },
  text: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ProgramareScreen;
