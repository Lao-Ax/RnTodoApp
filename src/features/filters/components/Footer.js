import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUncompletedTodosLength } from '../../todos/selectors';
import { selectFilters } from '../selectors';
import RemainingTodos from './RemainingTodos';
import StatusFilter from './StatusFilter';
import { statusFilterChanged } from '../actions';
import { StyleSheet, View } from 'react-native';

const Footer = () => {
  const dispatch = useDispatch();
  const todosRemaining = useSelector(selectUncompletedTodosLength);
  const { status } = useSelector(selectFilters);
  const handleStatusChange = useCallback(
    (status) => dispatch(statusFilterChanged(status)),
    [status],
  );

  // TODO AP: Use Container Components for all that staff
  return (
    <View style={styles.container}>
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={handleStatusChange} />
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
