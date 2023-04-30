import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigator/StackNavigator";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from '@eva-design/eva'

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}
