import React, { useRef } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import { Icon } from '@rneui/themed';

const SettingsScreen = ({ navigation }) => {
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
        onPress={() => navigation.navigate('ToDosTab')}></Button>
      <Button
        title={'Open User Info'}
        onPress={() => navigation.navigate('User Info')}></Button>
    </View>
  );
};

export const SettingsTitle = ({ children }) => {
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

export const RightHeaderButton = () => (
  <Button
    onPress={() => Alert.alert('This is a button!')}
    title="Alert Button"
    color="#4F4FFF"
  />
);

export default SettingsScreen;
