import {
  DELETE_ALL_COMPLETED,
  TODO_ADDED,
  TODO_DELETED,
  TODO_STATUS_CHANGED,
} from './constants';

export const todoAdded = (todo) => ({ type: TODO_ADDED, todo }); // For now it is unused because we save totos via async call.

export const todoDeleted = (id) => ({ type: TODO_DELETED, id });

export const todoStatusChanged = (id, status) => ({
  type: TODO_STATUS_CHANGED,
  id,
  status,
});

export const todoCompleted = (id) => todoStatusChanged(id, true);

export const deleteAllCompleted = () => ({ type: DELETE_ALL_COMPLETED });
