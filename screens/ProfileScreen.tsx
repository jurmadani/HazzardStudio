import { View, Text, Dimensions, ScrollView } from "react-native";
import React from "react";
import { Avatar, List, Divider } from "react-native-paper";
import EditeazaContButton from "../components/EditeazaContButton";
import SectionListProfile from "../components/SectionListProfile";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProfileScreen = () => {
  return (
    <ScrollView>
      <View>
        {/* Container pentru informatii user */}
        <View
          style={{
            backgroundColor: "white",
            height: 190,
            width: windowWidth - 70,
            alignSelf: "center",
            marginTop: 130,
            borderRadius: 10,
          }}
        >
          {/* Imaginea user-ului + informatii pe acelasi row */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Image
              size={70}
              source={{
                uri: "https://images.unsplash.com/photo-1595781572981-d63151b232ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
              }}
              style={{ margin: 20 }}
            />
            {/* Nume + email */}
            <View>
              <Text style={{ fontSize: 25, fontWeight: "600" }}>
                Daniel Jurma
              </Text>
              <Text style={{ color: "#CBCBCB", fontSize: 14, marginTop: 5 }}>
                d_jurma@yahoo.com
              </Text>
            </View>
          </View>
          <EditeazaContButton
            placeholder="Editeaza cont"
            onPressHandler={() => null} // aici trebuie pasata navigatia
          />
        </View>
        {/* Sectiunea cu */}
        <SectionListProfile />
        {/* numar versiune */}
        <Text
          style={{
            textAlign: "center",
            marginTop: windowWidth / 2,
            color: "#CACACA",
          }}
        >
          Versiune 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
