import { v4 as randomUuid } from 'uuid';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_TODOS, SAVE_TODO } from './constants';

const client = {
  get: async (endpoint) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const todos = [
          { text: 'Learn something', completed: false, id: randomUuid() },
          { text: 'Kill all humans', completed: true, id: randomUuid() },
          { text: 'Learn React', completed: false, id: randomUuid() },
          { text: 'Learn Redux', completed: false, id: randomUuid() },
        ].reduce((acc, todo) => {
          acc[todo.id] = todo;
          return acc;
        }, {});

        resolve({ todos });
      }, 4000);
    });
  },
  post: async (endpoint, todo) => {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            message: 'OK',
            status: 201,
            todo: {
              ...todo.todo,
              completed: false,
              id: randomUuid(),
            },
          }),
        2000,
      );
    });
  },
};

// Thunk functions

// Note: we could pass to thunk just `export async function fetchTodos(dispatch, getState)`.
// Here is just a common pattern.
// export const fetchTodos = () => async (dispatch, getState) => {
//   // The line below is a hotfix: for some reason redux persistr is not ready, and it saves to the store OLD value (idle) or the value from initial state
//   setTimeout(() => dispatch(todosLoading()), 1);
//   const response = await client.get('/fakeApi/todos');
//   dispatch(todosLoaded(response.todos));
// };

export const fetchTodos = createAsyncThunk(FETCH_TODOS, async () => {
  const response = await client.get('/fakeApi/todos');
  return response.todos;
});

export const saveNewTodo = createAsyncThunk(SAVE_TODO, async (text) => {
  const initialTodo = { text };
  const response = await client.post('/fakeApi/todos', { todo: initialTodo });
  return response.todo;
});
