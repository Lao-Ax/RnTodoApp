import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './features/counter/reducer';
import todosReducer from './features/todos/todosSlice';
import { filterReducer } from './features/filters/filterSlice';

// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    filters: filterReducer,
  },
});

export { store };
