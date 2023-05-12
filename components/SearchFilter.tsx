import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import DiscountCard from "./DiscountCard";
import ServiciileNoastre from "./ServiciileNoastre";
import EchipaNoastra from "./EchipaNoastra";
import { Spinner } from "@ui-kitten/components";
import { Echipa } from "../data/EchipaData";
import BarberCardFromSearchBar from "./BarberCardFromSearchBar";

interface Props {
  input: string;
}

const SearchFilter = ({ input }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      setLoading(true);
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <View>
      {/* Aratare home screen daca nimic nu este in searcbar */}
      {input === "" && (
        <SafeAreaView style={{ alignItems: "center",}}>
          <DiscountCard
            title="5% pentru clientii noi"
            description="discount valabil doar 2 zile"
            buttonTitle="Programeaza-te"
          />
          <ServiciileNoastre />
          <EchipaNoastra />
        </SafeAreaView>
      )}
      {/* Animatie loading cu delay pentru a scrie nume */}
      {loading && (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Spinner
            size="large"
            style={{ alignSelf: "center", borderColor: "blue" }}
          />
        </View>
      )}
      {/* aratare result from search query */}
      {!loading && (
        <View>
          {Echipa.map((item) =>
            item.nume.toLowerCase().includes(input.toLowerCase()) ? (
              /* If the condition is true, render the component */
              //@ts-expect-error
              <BarberCardFromSearchBar barber={item} />
            ) : null
          )}
        </View>
      )}
    </View>
  );
};

export default SearchFilter;
