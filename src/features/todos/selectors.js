import { statuses } from '../filters/filterSlice';
import { createSelector } from 'reselect';

export const selectTodos = (state) => state.todos.entities;

export const selectTodoIds = (state) => Object.keys(selectTodos(state));

export const selectTodoById = (state, id) => selectTodos(state)[id];

export const selectUncompletedTodosLength = (state) =>
  Object.values(selectTodos(state)).filter((todo) => !todo.completed).length;

export const selectFilteredTodos = createSelector(
  [selectTodos, (state) => state.filters.status],
  (todos, status) => {
    const showAll = status === statuses.ALL;

    if (showAll) {
      return todos;
    }

    const completed = status === statuses.COMPLETED;
    return Object.values(todos).reduce((acc, todo) => {
      if (todo.completed === completed) {
        acc[todo.id] = todo;
      }
      return acc;
    }, {});
  },
);

export const selectFilteredTodoIds = createSelector(
  [selectFilteredTodos],
  (filteredTodos) => Object.keys(filteredTodos),
);

export const selectLoadingStatus = (state) => state.todos.fetchStatus;
