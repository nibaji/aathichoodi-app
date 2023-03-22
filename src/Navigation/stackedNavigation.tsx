import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import PoemsList from '../Screens/PoemsList';
import PoemDetails from '../Screens/PoemDetails';
import InfoButton from '../Components/InfoButton';
import AppColor from '../Theme/colors';

export default function StackedNavigation() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

const stackHeaderOptions = {
  headerTitleStyle: {color: AppColor.accent},
  headerStyle: {backgroundColor: AppColor.primary},
  headerTintColor: AppColor.accent,
};

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PoemsList"
        component={PoemsList}
        options={{
          headerTitle: 'ஆத்திச்சூடி',
          headerRight: () => <InfoButton />,
          ...stackHeaderOptions,
        }}
      />
      <Stack.Screen
        name="Poem"
        component={PoemDetails}
        options={({route}) => ({
          title: route?.params?.title,
          ...stackHeaderOptions,
        })}
      />
    </Stack.Navigator>
  );
}
