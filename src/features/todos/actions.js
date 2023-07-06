export const TODO_ADDED = "todos/todoAdded"
export const TODO_STATUS_CHANGED = "todos/todoStatusChanged"
export const TODO_DELETED = "todos/todoDeleted"
export const STATUS_FILTER_CHANGED = "todos/statusFilterChanged"
export const DELETE_ALL_COMPLETED = "todos/deleteAllCompleted"


export const todoAdded = (todoText) => ({
  type: TODO_ADDED,
  todoText
});

export const todoDeleted = (id) => ({
  type: TODO_DELETED,
  id,
});

export const todoStatusChanged = (id, status) => ({
  type: TODO_STATUS_CHANGED,
  id,
  status
});

export const statusFilterChanged = (status) => ({
  type: STATUS_FILTER_CHANGED,
  status,
});

export const deleteAllCompleted = () => ({
  type: DELETE_ALL_COMPLETED,
});
