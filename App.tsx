import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TodosLandingScreen from './src/screens/TodosLandingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoDetailsScreen from './src/screens/TodoDetailsScreen';
import { Icon } from '@rneui/themed';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
const commonTabOptions = {
  headerShown: false,
};

// TODO DELETE
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const TodosStack = () => (
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
        headerStyle: {
          // options could be overridden
          backgroundColor: '#1ef489',
        },
        headerTintColor: '#0b34e1',
      })}
    />
  </Stack.Navigator>
);

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
        <Tab.Navigator screenOptions={commonTabOptions}>
          <Tab.Screen
            name="Home"
            component={TodosStack}
            options={{
              tabBarIcon: () => <Icon name={'checklist'} />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: () => <Icon name={'settings'} />,
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
