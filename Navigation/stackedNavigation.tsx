import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PoemsList from "../Screens/PoemsList";
import PoemDetails from "../Screens/PoemDetails";
import AppColor from "../Theme/colors";

export default function StackedNavigation() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PoemsList"
        component={PoemsList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Poem"
        component={PoemDetails}
        options={({ route }: any) => ({
          title: route.params.title,
          headerTitleStyle: { color: AppColor.accent },
          headerStyle: { backgroundColor: AppColor.primary },
          headerTintColor: AppColor.accent,
        })}
      />
    </Stack.Navigator>
  );
}
