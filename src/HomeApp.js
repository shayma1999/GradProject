import 'react-native-gesture-handler';
import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home1 from './components/Home1';
import Details1 from './components/Details1';

const Stack = createStackNavigator();

export default function HomeApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home1"
          component={Home1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details1"
          component={Details1}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}