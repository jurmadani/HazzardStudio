import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigator/StackNavigator";
import { ApplicationProvider } from "@ui-kitten/components";
import { NativeBaseProvider } from "native-base";
import * as eva from "@eva-design/eva";

export default function App() {
  return (
    <NativeBaseProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </NativeBaseProvider>
  );
}
