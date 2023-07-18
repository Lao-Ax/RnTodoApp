import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TodosLandingScreen from './src/screens/TodosLandingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TodoDetailsScreen from './src/screens/TodoDetailsScreen';

const Stack = createNativeStackNavigator();

const commonScreenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Stack.Navigator
          screenOptions={{
            headerBackTitle: 'Go back, please.',
            ...commonScreenOptions,
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
              headerStyle: { // options could be overridden
                backgroundColor: '#1ef489',
              },
              headerTintColor: '#0b34e1',
            })}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
