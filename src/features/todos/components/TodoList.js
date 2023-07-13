import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import Todo from './TodoContainer';
import { useSelector } from 'react-redux';
import { selectFilteredTodoIds, selectLoadingStatus } from '../selectors';
import { todoCompleted, todoDeleted, todoStatusChanged } from '../actions';
import { fetchStatuses } from '../todosSlice';
import { useNavigation } from '@react-navigation/native';

const keyExtractor = (item) => item;

export default () => {
  const todos = useSelector(selectFilteredTodoIds);
  const loadingStatus = useSelector(selectLoadingStatus);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('Todo', { id: item })}>
      <Todo
        todoId={item}
        onCompleteToggle={todoStatusChanged}
        onCompletePress={todoCompleted}
        onDelete={todoDeleted}
      />
    </Pressable>
  );

  console.log('@@@@ render list');
  return (
    <View style={styles.container}>
      {loadingStatus === fetchStatuses.LOADING && (
        <ActivityIndicator animating={true} size={'large'} />
      )}
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
