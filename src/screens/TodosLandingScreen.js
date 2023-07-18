import React from 'react';
import Header from '../features/todos/components/Header';
import { saveNewTodo } from '../features/todos/api';
import TodoList from '../features/todos/components/TodoList';
import Footer from '../features/filters/components/Footer';


/**
 * Screen receives props from Navigator. The props are: { navigation, route: { params } }
 * @return {JSX.Element}
 */
export default () => {
  return (
    <>
      <Header onSubmit={saveNewTodo} />
      <TodoList />
      <Footer />
    </>
  );
};
