import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function UserInfoScreen({ navigation }) {
  // TODO AP: Comment all this examples
  const focused = useIsFocused();
  const [showFocusText, setShowFocusText] = useState(false);

  useEffect(() => {
    navigation.getParent().setOptions({ headerShown: false });
    return () => navigation.getParent().setOptions({ headerShown: true });
  }, [navigation]);

  useEffect(() => {
    if (!focused) {
      setShowFocusText(focused);
    }

    const doAsync = async () => {
      if (focused) {
        setTimeout(() => setShowFocusText(focused), 800);
      }
    };
    doAsync();
  }, [focused, setShowFocusText]);

  return (
    <>
      <Text>User Info</Text>
      {!!showFocusText && <Text>The screen is in focus :)</Text>}
    </>
  );
}

export default UserInfoScreen;
