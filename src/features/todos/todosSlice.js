import { TODO_ADDED, TODO_DELETED, TODO_STATUS_CHANGED } from './constants';
import { createEntityAdapter, createReducer } from '@reduxjs/toolkit';
import { fetchTodos, saveNewTodo } from './api';

const todosAdapter = createEntityAdapter();

export const fetchStatuses = {
  IDLE: 'idle',
  LOADING: 'in progress',
  SUCCEEDED: 'succeeded',
  FAILED: 'failed',
};

// entities and ids are optional
const initialState = todosAdapter.getInitialState({
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
  ids: [0, 1, 2],
  fetchStatus: fetchStatuses.IDLE,
});

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TODO_ADDED, (state, action) => {
      // here could be todosAdapter.addOne or upsertOne. See more examples here: https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createentityadapter
      state.entities[action.todo.id] = action.todo;
      state.fetchStatus = fetchStatuses.IDLE;
    })
    .addCase(TODO_STATUS_CHANGED, (state, action) => {
      // here could be todosAdapter.update
      const { id, status } = action;
      if (state.entities[id].completed === status) {
        return;
      }
      state.entities[id].completed = status ?? !state.entities[id].completed;
    })
    // Thunk actions
    .addCase(TODO_DELETED, todosAdapter.removeOne)
    .addCase(fetchTodos.pending, (state, action) => {
      state.fetchStatus = fetchStatuses.LOADING;
    })
    .addCase(fetchTodos.fulfilled, (state, action) => {
      if (Object.keys(state.entities).length < 3) {
        state.fetchStatus = fetchStatuses.IDLE;
        todosAdapter.addMany(state, action.payload);
      } else {
        state.fetchStatus = fetchStatuses.SUCCEEDED;
      }
    })
    .addCase(saveNewTodo.fulfilled, (state, action) => {
      const todo = action.payload;
      todosAdapter.addOne(state, todo);
      state.fetchStatus = fetchStatuses.IDLE;
    });
});

// adapter can return some selectors like. But it is quite hard to debug. NOTE the return types!
const { selectAll: selectTodos, selectById: selectTodoById } =
  todosAdapter.getSelectors((state) => state.todos);
export const _selectors = { selectTodos, selectTodoById };

export default reducer;
