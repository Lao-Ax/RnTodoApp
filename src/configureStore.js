import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './features/counter/reducer';
import todosReducer from './features/todos/todosSlice';
import { filterReducer } from './features/filters/filterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { NAME as counterSate } from './features/counter/constants';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';
import { logger } from './customMIddleware';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage, // TODO AP: Use MMKV storage
  blacklist: [counterSate],
};

const persistedRootReducer = persistCombineReducers(persistConfig, {
  [counterSate]: counterReducer,
  todos: todosReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
