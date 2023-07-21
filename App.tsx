import React, { useEffect, useRef } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TodosLandingScreen from './src/screens/TodosLandingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoDetailsScreen from './src/screens/TodoDetailsScreen';
import { Icon } from '@rneui/themed';

const TodoStackNavigator = createNativeStackNavigator();
const SettingsStackNavigator = createNativeStackNavigator();
const TabNavigator = createBottomTabNavigator();

const commonStackOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  headerBackTitleStyle: {
    fontSize: 11, // Only for iOS
  },
};
const commonTabOptions = {
  headerShown: false,
};

// TODO DELETE
function SettingsScreen({ navigation }) {
  const count = useRef(0);

  const handlePress = () => {
    count.current += 1;
    navigation.getParent().setOptions({ tabBarBadge: count.current });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title={'Add badge counter'} onPress={handlePress}></Button>
      <Button
        title={'Back to Todo List'}
        onPress={() => navigation.navigate('ToDos')}></Button>
      <Button
        title={'Open User Info'}
        onPress={() => navigation.navigate('User Info')}></Button>
    </View>
  );
}
function UserInfoScreen({ navigation }) {
  useEffect(() => {
    navigation.getParent().setOptions({ headerShown: false });
    return () => navigation.getParent().setOptions({ headerShown: true });
  }, [navigation]);

  return (
    <>
      <Text>User Info</Text>
    </>
  );
}
// TODO DELETE
const SettingsTitle = ({ children }: { children: String }) => {
  return (
    <>
      <Text>
        .<Icon name={'settings'} size={9}></Icon>
        {children}
        <Icon name={'settings'} size={12}></Icon>^
      </Text>
    </>
  );
};
const RightHeaderButton = () => (
  <Button
    onPress={() => Alert.alert('This is a button!')}
    title="Alert Button"
    color="#4F4FFF"
  />
);

const TodosStack = () => (
  <TodoStackNavigator.Navigator
    screenOptions={{
      headerBackTitle: 'Go back, please.',
      ...commonStackOptions,
    }}>
    <TodoStackNavigator.Screen
      name="TodoList"
      component={TodosLandingScreen}
      options={{ title: 'Todo list' }}
    />
    <TodoStackNavigator.Screen
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
  </TodoStackNavigator.Navigator>
);

const SettingsStack = () => (
  <SettingsStackNavigator.Navigator screenOptions={commonStackOptions}>
    <SettingsStackNavigator.Screen name="Settings" component={SettingsScreen} />
    <SettingsStackNavigator.Screen
      name="User Info"
      component={UserInfoScreen}
    />
  </SettingsStackNavigator.Navigator>
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
        <TabNavigator.Navigator screenOptions={commonTabOptions}>
          <TabNavigator.Screen
            name="ToDosTab"
            component={TodosStack}
            options={{
              tabBarIcon: () => <Icon name={'checklist'} />,
            }}
          />
          <TabNavigator.Screen
            name="SettingsTab"
            component={SettingsStack}
            options={{
              tabBarIcon: () => <Icon name={'settings'} />,
              headerShown: true,
              headerTitle: SettingsTitle,
              headerRight: RightHeaderButton,
            }}
          />
        </TabNavigator.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
