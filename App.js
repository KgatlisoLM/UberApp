import "react-native-gesture-handler";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "./screens/MapScreen";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
           behavior={Platform.OS === "ios" ? "padding" : "height"}
           keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
           style={{flex: 1}}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                  gestureEnabled: true,
                  gestureDirection: "horizontal",
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
