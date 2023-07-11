import {
  DELETE_ALL_COMPLETED,
  TODO_ADDED,
  TODO_DELETED,
  TODO_STATUS_CHANGED,
  TODOS_LOADED,
  TODOS_LOADING,
} from './constants';

export const todoAdded = (todo) => ({ type: TODO_ADDED, todo });

export const todoDeleted = (id) => ({ type: TODO_DELETED, id });

export const todoStatusChanged = (id, status) => ({
  type: TODO_STATUS_CHANGED,
  id,
  status,
});

export const todoCompleted = (id) => todoStatusChanged(id, true);

export const deleteAllCompleted = () => ({ type: DELETE_ALL_COMPLETED });

export const todosLoaded = (todos) => ({ type: TODOS_LOADED, todos });

export const todosLoading = () => ({ type: TODOS_LOADING });
