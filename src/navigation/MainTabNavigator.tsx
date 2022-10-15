import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TMainTabParamsList} from '../types/navigation';
import {BottomBar} from '../components/organisms';
import {
  FTHomeScreen,
  FTExploreScreen,
  FTAccountScreen,
  FTNotifyScreen,
} from '../screens';

const Tab = createBottomTabNavigator<TMainTabParamsList>();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
      }}
      tabBar={props => <BottomBar {...props} />}>
      <Tab.Screen name="HomeScreen" component={FTHomeScreen} />
      <Tab.Screen name="ExploreScreen" component={FTExploreScreen} />
      <Tab.Screen name="NotifyScreen" component={FTNotifyScreen} />
      <Tab.Screen name="AccountScreen" component={FTAccountScreen} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
