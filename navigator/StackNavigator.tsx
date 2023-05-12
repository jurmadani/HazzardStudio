import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import DrawerNavigator from "./DrawerNavigator";
import FrizerDetaliiScreen from "../screens/FrizerDetaliiScreen";
import ProgramareScreen from "../screens/ProgramareScreen";
import ProgramareHeader from "../components/ProgramareHeader";
import LoadingPaymentScreen from "../screens/LoadingPaymentScreen";
import PaymentsScreen from "../screens/PaymentsScreen";

export type StackParams = {
  Splashscreen: any;
  Onboarding: any;
  Login: any;
  Register: any;
  ForgotPassword: any;
  Drawer: any;
  Details: any;
  Programare: any;
  LoadingPayment: any;
};

const Stack = createNativeStackNavigator<StackParams>();

/* DEACTIVATED SCREEN 
  <Stack.Screen
        name="Splashscreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Login"
        //@ts-expect-error
        component={LoginScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
            <Stack.Screen
        name="Details"
        component={FrizerDetaliiScreen}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
*/

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Details"
        component={FrizerDetaliiScreen}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="Programare"
        component={ProgramareScreen}
        options={{
          header: (navigation) => <ProgramareHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="LoadingPayment"
        component={LoadingPaymentScreen}
        options={{
          headerShown: false,
          gestureEnabled:false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
