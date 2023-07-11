import { todoAdded, todosLoaded, todosLoading } from './actions';
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

// Thunk functions

// Note: we could pass to thunk just `export async function fetchTodos(dispatch, getState)`.
// Here is just a common pattern.
export const fetchTodos = () => async (dispatch, getState) => {
  // The line below is a hotfix: for some reason redux persistor is not ready, and it saves to the store OLD value (idle) or the value from initial state
  setTimeout(() => dispatch(todosLoading()), 1);
  const response = await client.get('/fakeApi/todos');
  dispatch(todosLoaded(response.todos));
};

export const saveNewTodo = (text) => async (dispatch) => {
  dispatch(todosLoading());
  const initialTodo = { text };
  const response = await client.post('/fakeApi/todos', { todo: initialTodo });
  dispatch(todoAdded(response.todo));
};
