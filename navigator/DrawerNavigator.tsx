import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import { DrawerContent } from "../components/DrawerContent";
import DrawerHeader from "../components/DrawerHeader";

export type DrawerParams = {
  Home: any;
};

const Drawer = createDrawerNavigator<DrawerParams>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={{
        header: (navigation) => <DrawerHeader navigation={navigation} />,
        headerTransparent: true,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
