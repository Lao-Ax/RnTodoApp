import React from 'react';
import CounterContainer from '../features/counter/components/CounterContainer';
import { useSelector } from 'react-redux';
import { selectTodoById, selectTodos } from '../features/todos/selectors';
import TodoDetails from '../features/todos/components/TodoDetails';

export default ({ navigation, route }) => {
  const {
    params: { id },
  } = route;
  const todo = useSelector((state) => selectTodoById(state, id));

  console.log('@@@@ render TD screen');
  return (
    <>
      <CounterContainer />
      <TodoDetails todo={todo} />
    </>
  );
};
