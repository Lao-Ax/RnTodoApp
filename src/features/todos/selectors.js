import { statuses } from '../filters/filterSlice';
import { createSelector } from 'reselect';

export const selectTodos = (state) => state.todos;

export const selectTodoIds = (state) => state.todos.map((todo) => todo.id);

export const selectTodoById = (state, id) =>
  state.todos.find((todo) => todo.id === id);

export const selectUncompletedTodosLength = (state) => {
  return state.todos.filter((todo) => !todo.completed).length;
};

export const selectFilteredTodos = createSelector(
  [selectTodos, (state) => state.filters.status],
  (todos, status) => {
    const showAll = status === statuses.ALL;

    if (showAll) {
      return todos;
    }

    const completed = status === statuses.COMPLETED;
    return todos.filter((todo) => todo.completed === completed);
  },
);

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id),
);
