import React from 'react';
import TodosStack from './TodosStack';
import { Icon } from '@rneui/themed';
import SettingsStack from './SettingsStack';
import { RightHeaderButton, SettingsTitle } from '../screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { commonTabOptions } from './options';

const TabNavigator = createBottomTabNavigator();

const AppNavigator = () => (
  <TabNavigator.Navigator screenOptions={commonTabOptions}>
    <TabNavigator.Screen
      name="ToDosTab"
      component={TodosStack}
      options={{
        title: "Todo List",
        tabBarIcon: () => <Icon name={'checklist'} />,
      }}
    />
    <TabNavigator.Screen
      name="SettingsTab"
      component={SettingsStack}
      options={{
        title: "Settings",
        tabBarIcon: () => <Icon name={'settings'} />,
        headerShown: true,
        headerTitle: SettingsTitle,
        headerRight: RightHeaderButton,
      }}
    />
  </TabNavigator.Navigator>
);

export default AppNavigator;
