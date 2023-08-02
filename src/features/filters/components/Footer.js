import React from 'react';
import RemainingTodos from './RemainingTodosContainer';
import StatusFilter from './StatusFilterContainer';
import { StyleSheet, View } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <RemainingTodos />
      <StatusFilter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    backgroundColor: 'white',
    padding: 10,
  },
});

export default Footer;
