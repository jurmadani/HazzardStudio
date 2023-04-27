import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

interface Item {
  id: number;
  title: string;
  description: string;
  image: any; // replace any with the appropriate type of the image
  animation: any;
}

interface Props {
  item: Item;
}

const OnBoardingItem: React.FC<Props> = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          width,
          bottom: item.animation === null && item.image === null ? 60 : 0,
        },
      ]}
    >
      <Image
        source={item?.image}
        style={[
          styles.image,
          { width: 170, height: 170, resizeMode: "contain" },
        ]}
      />
      {item.id != 0 && item.animation != null && (
        <LottieView
          source={item?.animation}
          style={{
            width: 250,
            height: 250,
            marginBottom: 40,
          }}
          resizeMode="contain"
          autoPlay
          loop={item.id === 2 ? false : true}
          speed={item.id === 2 ? 1 : 0.4}
        />
      )}

      <View style={{ flex: 0.4, marginBottom: 100 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "800",
    fontSize: 36,
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "white",
    textAlign: "center",
    paddingHorizontal: 64,
    fontSize: 15,
  },
});
