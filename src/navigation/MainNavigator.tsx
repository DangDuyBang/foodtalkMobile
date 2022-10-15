import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TMainStackParamsList} from '../types/navigation';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator<TMainStackParamsList>();

function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={'MainTab'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTab" component={MainTabNavigator} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
