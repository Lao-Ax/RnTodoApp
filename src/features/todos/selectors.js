import { statuses } from '../filters/filterSlice';
import { createSelector } from '@reduxjs/toolkit';
import { _selectors } from './todosSlice';

export const selectTodos = _selectors.selectTodos;
export const selectIds = _selectors.selectIds;

export const selectTodoById = _selectors.selectTodoById;

export const selectUncompletedTodosLength = (state) =>
  selectTodos(state).filter((todo) => !todo.completed).length;

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
  [selectFilteredTodos],
  (filteredTodos) => filteredTodos.map((todo) => todo.id),
);

export const selectLoadingStatus = (state) => state.todos.fetchStatus;
