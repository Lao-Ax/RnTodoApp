import React, { useEffect } from 'react';
import { Text } from 'react-native';

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

export default UserInfoScreen;
