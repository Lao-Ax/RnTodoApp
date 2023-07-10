import React from 'react';
import { Button, Switch, Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const Todo = ({ todo, onDelete, onCompleteToggle, onCompletePress }) => {
  const { text, completed } = todo;
  const dispatch = useDispatch();

  const handleCompeteToggle = () => {
    dispatch(onCompleteToggle(todo.id));
  };
  const handleCompetePress = () => {
    dispatch(onCompletePress(todo.id));
  };
  const handleDeletePress = () => {
    dispatch(onDelete(todo.id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <Text>{text}</Text>
        <Switch value={completed} onChange={handleCompeteToggle} />
      </View>
      <View style={styles.buttons}>
        <Button title={'Delete'} onPress={handleDeletePress} />
        <Button title={'Completed'} onPress={handleCompetePress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default Todo;
