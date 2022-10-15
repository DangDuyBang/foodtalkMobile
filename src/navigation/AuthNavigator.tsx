import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TAuthStackParamsList} from '../types/navigation';
import {
  AULogInScreen,
  AUSignUpScreen,
  AUForgotPasswordScreen,
} from '../screens';

const Stack = createNativeStackNavigator<TAuthStackParamsList>();

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LogInScreen"
      screenOptions={{
        gestureEnabled: false,
        headerShown: true,
      }}>
      <Stack.Screen name="LogInScreen" component={AULogInScreen} />
      <Stack.Screen name="SignUpScreen" component={AUSignUpScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={AUForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
