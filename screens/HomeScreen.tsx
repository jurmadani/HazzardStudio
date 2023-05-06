import { SafeAreaView, ScrollView, Text, Dimensions } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import DiscountCard from "../components/DiscountCard";
import ServiciileNoastre from "../components/ServiciileNoastre";
import EchipaNoastra from "../components/EchipaNoastra";


const windowWidth = Dimensions.get("window").width;

const HomeScreen = () => {

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
      <SafeAreaView style={{ alignItems: "center" }}>
        {/* Search bar pentru frizeri */}
        {/* @ts-expect-error  */}
        <Searchbar
          placeholder="Cauta frizer"
          style={{ backgroundColor: "#DCDFE3", width: windowWidth - 50 }}
          elevation={2}
        />
        <DiscountCard
          title="5% pentru clientii noi"
          description="discount valabil doar 2 zile"
          buttonTitle="Programeaza-te"
        />
        <ServiciileNoastre />
        <EchipaNoastra />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
