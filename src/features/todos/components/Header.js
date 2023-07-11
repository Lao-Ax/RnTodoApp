import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchStatuses } from '../todosSlice';

const Header = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [status, setStatus] = useState(fetchStatuses.IDLE);
  const isLoading = status === fetchStatuses.LOADING;

  const handleSubmit = async () => {
    setStatus(fetchStatuses.LOADING);
    setText('');
    // How should I know, that this action is an async function? Potentially onSubmit could be any function. Need to use Saga :)
    await dispatch(onSubmit(text.trim()));
    setStatus(fetchStatuses.IDLE);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={
          isLoading ? 'Please, wait a bit.' : 'What are you going to do?'
        }
        onSubmitEditing={handleSubmit}
      />
      {isLoading && <ActivityIndicator animating={true} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
});

export default Header;
