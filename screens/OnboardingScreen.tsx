import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  ImageBackground,
  StatusBar,
} from "react-native";
import React, { useState, useRef } from "react";
import { FlatList } from "react-native";
import OnBoardingScreenSlides from "../constants/OnBoardingScreenSlides";
import OnBoardingItem from "../components/OnBoardingItem";
import Paginator from "../components/Paginator";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackParams } from "../navigator/StackNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface Item {
  id: number;
  title: string;
  description: string;
  image: any;
  animation: any;
}

const windowWidth: number = Dimensions.get("window").width;
const windowHeight: number = Dimensions.get("window").height;

const OnBoardingScreen_v2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();
  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<Item>>(null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      setCurrentIndex(viewableItems[0].index);
    }
  ).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  StatusBar.setBarStyle("light-content", true);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Onboarding-Background-2.png")}
        style={{ height: windowHeight, width: windowWidth }}
      >
        <FlatList
          data={OnBoardingScreenSlides}
          renderItem={({ item }: { item: Item }) => (
            <OnBoardingItem item={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id.toString()}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </ImageBackground>
      <Paginator data={OnBoardingScreenSlides} scrollX={scrollX} />

      <TouchableOpacity
        onPress={() => {
          // Scroll to the next item in the FlatList
          if (currentIndex + 1 > OnBoardingScreenSlides.length - 1) {
            navigation.navigate("Login");
          } else {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
          }
        }}
      >
        <View
          style={{
            height: 60,
            width: windowWidth - 80,
            backgroundColor: "white",
            bottom: 130,
            borderRadius: 13,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
            {currentIndex === OnBoardingScreenSlides.length - 1
              ? "Incepe"
              : "Continua"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoardingScreen_v2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: windowHeight * 1.5,
    bottom: 150,
  },
});
