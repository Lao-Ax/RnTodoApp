import React from 'react';
import { Button, Switch, Text, View, StyleSheet } from 'react-native';

export const Todo = ({ todo, onDelete, onCompletedChange }) => {
  const { text, completed } = todo;

  const handleCompletedChanged = (text) => {
    onCompletedChange(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.todo}>
        <Text>{text}</Text>
        <Switch value={completed} onChange={handleCompletedChanged} />
      </View>
      <View style={styles.buttons}>
        <Button title={'Delete'} onPress={onDelete} />
        <Button title={'Completed'} onPress={handleCompletedChanged} />
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
