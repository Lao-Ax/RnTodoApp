import { FlatList } from 'react-native';
import TodoContainer from './TodoContainer';

const renderItem = ({ item }) => <TodoContainer todo={item} />;

export const TodoList = ({ todos }) => {
  return <FlatList data={todos} renderItem={renderItem} />;
};
