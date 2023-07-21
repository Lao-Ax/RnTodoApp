import React from 'react';
import TodosLandingScreen from '../screens/TodosLandingScreen';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { commonStackOptions } from './options';

const Stack = createNativeStackNavigator();

const TodosStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitle: 'Go back, please.',
      ...commonStackOptions,
    }}>
    <Stack.Screen
      name="TodoList"
      component={TodosLandingScreen}
      options={{ title: 'Todo list' }}
    />
    <Stack.Screen
      name="Todo"
      component={TodoDetailsScreen}
      options={({ route }) => ({
        title: `Todo: ${route?.params?.id}`,
        headerStyle: {
          // options could be overridden
          backgroundColor: '#1ef489',
        },
        headerTintColor: '#0b34e1',
      })}
    />
  </Stack.Navigator>
);

export default TodosStack;
