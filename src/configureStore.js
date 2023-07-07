import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './features/counter/reducer';
import todosReducer from './features/todos/todosSlice';
import { filterReducer } from './features/filters/filterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
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
};

const rootReducer = combineReducers({
  [counterSate]: counterReducer,
  todos: todosReducer,
  filters: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});
export const persistor = persistStore(store);
