import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './features/counter/reducer';

// Create a new Redux store with the `createStore` function,
// and use the `counterReducer` for the update logic
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export { store };
