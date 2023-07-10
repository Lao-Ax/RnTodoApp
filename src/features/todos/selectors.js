import { statuses } from '../filters/filterSlice';

export const selectTodos = (state) => state.todos;

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
