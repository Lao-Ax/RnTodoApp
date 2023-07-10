import React from 'react';
import { Button, Switch, Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

const Todo = ({ todo, onDelete, onCompleteToggle, onCompletePress }) => {
  const { text, completed, id } = todo;
  const dispatch = useDispatch();

  const handleCompeteToggle = () => {
    dispatch(onCompleteToggle(id));
  };
  const handleCompetePress = () => {
    dispatch(onCompletePress(id));
  };
  const handleDeletePress = () => {
    dispatch(onDelete(id));
  };

  console.log('@@@ render TodoItem', text)
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
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Todo;
