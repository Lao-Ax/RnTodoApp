import { todoAdded, todosLoaded } from './actions';
import { v4 as randomUuid } from 'uuid';

const client = {
  get: async (endpoint) => {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            todos: [
              { text: 'Learn something new', completed: false },
              { text: 'Kill all humans', completed: true },
              { text: 'Learn React', completed: false },
              { text: 'Learn Redux', completed: false },
            ],
          }),
        4000,
      );
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
            },
          }),
        6000,
      );
    });
  },
};

// Thunk function
export async function fetchTodos(dispatch, getState) {
  const response = await client.get('/fakeApi/todos');
  dispatch(todosLoaded(response.todos));
}

export function saveNewTodo(text) {
  return async function (dispatch, getState) {
    const initialTodo = { text };
    const response = await client.post('/fakeApi/todos', { todo: initialTodo });
    dispatch(todoAdded(response.todo.text));
  };
}
