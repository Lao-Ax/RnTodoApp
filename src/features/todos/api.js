import { todoAdded, todosLoaded } from './actions';
import { v4 as randomUuid } from 'uuid';

const client = {
  get: async (endpoint) => {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            todos: [
              {
                text: 'Learn something new',
                completed: false,
                id: randomUuid(),
              },
              { text: 'Kill all humans', completed: true, id: randomUuid() },
              { text: 'Learn React', completed: false, id: randomUuid() },
              { text: 'Learn Redux', completed: false, id: randomUuid() },
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
              completed: false,
              id: randomUuid(),
            },
          }),
        2000,
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
    dispatch(todoAdded(response.todo));
  };
}
