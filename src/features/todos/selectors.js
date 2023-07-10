import { statuses } from '../filters/filterSlice';

export const selectTodos = (state) => state.todos;

export const selectTodoIds = (state) => state.todos.map((todo) => todo.id);

export const selectTodoById = (state, id) =>
  state.todos.find((todo) => todo.id === id);

export const selectUncompletedTodosLength = (state) => {
  return state.todos.filter((todo) => !todo.completed).length;
};

export const selectFilteredTodos = (state) => {
  const status = state.filters.status;
  const showAll = status === statuses.ALL;

  if (showAll) {
    return state.todos;
  }

  const completed = status === statuses.COMPLETED;
  return selectTodos(state).filter((todo) => todo.completed === completed);
};

export const selectFilteredTodoIds = (state) => selectFilteredTodos(state).map(todo => todo.id)
