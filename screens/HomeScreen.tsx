import {
  SafeAreaView,
  ScrollView,
  Text,
  Dimensions,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import DiscountCard from "../components/DiscountCard";
import ServiciileNoastre from "../components/ServiciileNoastre";
import EchipaNoastra from "../components/EchipaNoastra";
import SearchFilter from "../components/SearchFilter";

const windowWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);
  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <SafeAreaView style={{ alignItems: "center" }}>
        {/* Search bar pentru frizeri */}
        {/* @ts-expect-error  */}
        <Searchbar
          placeholder="Cauta frizer"
          onChangeText={onChangeSearch}
          style={{ backgroundColor: "#DCDFE3", width: windowWidth - 50 }}
          elevation={2}
        />
        <SearchFilter input={searchQuery} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
