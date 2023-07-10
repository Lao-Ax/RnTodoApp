import { FlatList } from 'react-native';
import Todo from './Todo';
import { useSelector } from 'react-redux';
import { selectTodos, selectFilteredTodos } from '../selectors';
import { todoCompleted, todoDeleted, todoStatusChanged } from '../actions';

const keyExtractor = (item) => item.id;

export default () => {
  const todos = useSelector(selectFilteredTodos);

  const renderItem = ({ item }) => (
    <Todo
      todo={item}
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
