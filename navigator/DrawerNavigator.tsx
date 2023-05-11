import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import { DrawerContent } from "../components/DrawerContent";
import DrawerHeaderHome from "../components/DrawerHeaderHome";
import ProfileScreen from "../screens/ProfileScreen";
import DrawerHeaderProfile from "../components/DrawerHeaderProfile";
import PaymentsScreen from "../screens/PaymentsScreen";
import IstoricProgramariScreen from "../screens/UpcomingAppointmentScreen";
import MaterialTopTabNavigator from "./MaterialTopTabNavigator";
import DrawerHeaderIstoricPlati from "../components/DrawerHeaderIstoricPlati";

export type DrawerParams = {
  Home: any;
  Profile: any;
  Payments: any;
  IstoricProgramari: any;
};

const Drawer = createDrawerNavigator<DrawerParams>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: (navigation) => <DrawerHeaderHome navigation={navigation} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: (navigation) => (
            <DrawerHeaderProfile navigation={navigation} />
          ),
          headerTransparent: true,
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          header: (navigation) => (
            <DrawerHeaderProfile navigation={navigation} />
          ),
          headerTransparent: true,
        }}
      />
      <Drawer.Screen
        name="IstoricProgramari"
        component={MaterialTopTabNavigator}
        options={{
          header: (navigation) => (
            <DrawerHeaderIstoricPlati navigation={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
