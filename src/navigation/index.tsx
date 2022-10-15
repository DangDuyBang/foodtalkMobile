import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TRootParamsList} from '../types/navigation';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import AuthStore from '../stores/Auth';
import {observer} from 'mobx-react-lite';

const Stack = createNativeStackNavigator<TRootParamsList>();

const AppContainer = observer(() => {
  const {isLogined} = AuthStore;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      {!isLogined ? (
        <Stack.Screen name="AuthStack" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="MainStack" component={MainNavigator} />
      )}
    </Stack.Navigator>
  );
});

export default function App() {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
}
