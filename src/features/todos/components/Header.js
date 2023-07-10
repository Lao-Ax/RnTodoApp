import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

const Header = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleSubmit = () => {
    dispatch(onSubmit(text));
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={'What are you going to do?'}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});

export default Header;
