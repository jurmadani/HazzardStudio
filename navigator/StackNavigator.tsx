import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";

export type StackParams = {
  Splashscreen: any;
  Onboarding: any;
  Login: any;
};

const Stack = createNativeStackNavigator<StackParams>();

/* DEACTIVATED SCREEN 
  <Stack.Screen
        name="Splashscreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
*/

const StackNavigator = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default StackNavigator;