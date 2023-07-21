import React from 'react';
import CounterContainer from '../features/counter/components/CounterContainer';
import { useSelector } from 'react-redux';
import { selectIds, selectTodoById } from '../features/todos/selectors';
import TodoDetails from '../features/todos/components/TodoDetails';
import { Button, View } from 'react-native';

export default ({ navigation, route }) => {
  const {
    params: { id },
  } = route;
  const todo = useSelector((state) => selectTodoById(state, id));
  const ids = useSelector(selectIds);
  const randomId = ids[Math.floor(Math.random() * ids.length)];

  console.log('@@@@ render TD screen');
  return (
    <>
      <CounterContainer />
      <TodoDetails todo={todo} />
      <View>
        <Button
          title={'Open another random todo'}
          onPress={() => {
            navigation.push('Todo', { id: randomId });
          }}></Button>
        <Button
          title={'Go back to List with Navigate'}
          onPress={() => {
            navigation.navigate('TodoList');
          }}></Button>
        <Button
          title={'Go back List with pop-to-top'}
          onPress={navigation.popToTop}></Button>
        <Button
          title={"Update current Todo's ID"}
          onPress={() => navigation.setParams({ id: randomId })}></Button>
        <Button
          title="Update the title"
          onPress={() => navigation.setOptions({ title: 'Updated!' })}
        />
        {/*<Button title="Open User Info" onPress={() => { navigation.navigate('User Info')}} />*/}
      </View>
    </>
  );
};
