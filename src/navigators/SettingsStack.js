import React from 'react';
import SettingsScreen from '../screens/SettingsScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import { commonStackOptions } from './options';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SettingsStack = () => (
  <Stack.Navigator screenOptions={commonStackOptions}>
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="User Info" component={UserInfoScreen} />
  </Stack.Navigator>
);

export default SettingsStack;
