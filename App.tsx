import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigator/StackNavigator";
import { ApplicationProvider } from "@ui-kitten/components";
import { Provider as PaperProvider } from "react-native-paper";
import { NativeBaseProvider } from "native-base";
import * as eva from "@eva-design/eva";
import DrawerNavigator from "./navigator/DrawerNavigator";

export default function App() {
  return (
    <PaperProvider>
      <NativeBaseProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ApplicationProvider>
      </NativeBaseProvider>
    </PaperProvider>
  );
}
