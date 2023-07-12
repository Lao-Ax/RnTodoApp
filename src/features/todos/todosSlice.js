import {
  TODO_ADDED,
  TODO_DELETED,
  TODO_STATUS_CHANGED,
  TODOS_LOADED,
  TODOS_LOADING,
} from './constants';
import { createReducer } from '@reduxjs/toolkit';
import {
  todoAdded,
  todoDeleted,
  todosLoaded,
  todosLoading,
  todoStatusChanged,
} from './actions';

export const fetchStatuses = {
  IDLE: 'idle',
  LOADING: 'in progress',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

const initialState = {
  entities: {
    0: { id: '0', text: 'Learn React', completed: true },
    1: { id: '1', text: 'Learn Redux', completed: false, color: 'purple' },
    2: {
      id: '2',
      text: 'Build something fun!',
      completed: false,
      color: 'blue',
    },
  },
  fetchStatus: fetchStatuses.IDLE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TODO_ADDED, (state, action) => {
      state.entities[action.todo.id] = action.todo;
      state.fetchStatus = fetchStatuses.IDLE;
    })
    .addCase(TODO_STATUS_CHANGED, (state, action) => {
      const { id, status } = action;
      if (state.entities[id].completed === status) {
        return;
      }
      state.entities[id].completed = status ?? !state.entities[id].completed;
    })
    .addCase(TODO_DELETED, (state, action) => {
      const { id: idToDelete } = action;
      delete state.entities[idToDelete];
    })
    .addCase(TODOS_LOADED, (state, action) => {
      if (Object.keys(state.entities).length < 3) {
        state.fetchStatus = fetchStatuses.IDLE;
        state.entities = Object.assign(state.entities, action.todos);
      } else {
        state.fetchStatus = fetchStatuses.SUCCEEDED;
      }
    })
    .addCase(TODOS_LOADING, (state, action) => {
      state.fetchStatus = fetchStatuses.LOADING;
    });
});

export default reducer;
