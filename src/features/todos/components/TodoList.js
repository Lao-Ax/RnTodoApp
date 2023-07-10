import { FlatList, StyleSheet } from 'react-native';
import Todo from './TodoContainer';
import { useSelector } from 'react-redux';
import { selectFilteredTodoIds } from '../selectors';
import { todoCompleted, todoDeleted, todoStatusChanged } from '../actions';

const keyExtractor = (item) => item;

export default () => {
  const todos = useSelector(selectFilteredTodoIds);

  const renderItem = ({ item }) => (
    <Todo
      todoId={item}
      onCompleteToggle={todoStatusChanged}
      onCompletePress={todoCompleted}
      onDelete={todoDeleted}
    />
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});
