import React from 'react';
import TodosStack from './TodosStack';
import { Icon } from '@rneui/themed';
import SettingsStack from './SettingsStack';
import { RightHeaderButton, SettingsTitle } from '../screens/SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { commonTabOptions } from './options';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const TabNavigator = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  // TODO AP Next: move all screen names to one file
  const hideTabsOn = ['Todo'];
  const routeName = getFocusedRouteNameFromRoute(route);
  if (hideTabsOn.indexOf(routeName) > -1) {
    return { tabBarStyle: { display: 'none' } };
  } else return {};
};

const AppNavigator = () => (
  <TabNavigator.Navigator
    screenOptions={({ route }) => ({
      ...commonTabOptions,
      ...getTabBarVisibility(route),
    })}>
    <TabNavigator.Screen
      name="ToDosTab"
      component={TodosStack}
      options={{
        title: 'Todo List',
        tabBarIcon: () => <Icon name={'checklist'} />,
      }}
    />
    <TabNavigator.Screen
      name="SettingsTab"
      component={SettingsStack}
      options={{
        title: 'Settings',
        tabBarIcon: () => <Icon name={'settings'} />,
        headerShown: true,
        headerTitle: SettingsTitle,
        headerRight: RightHeaderButton,
      }}
    />
  </TabNavigator.Navigator>
);

export default AppNavigator;
