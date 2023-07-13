import { configureStore } from '@reduxjs/toolkit';
import {
  counterReducer,
  NAME as counterSateName,
} from './features/counter/reducer';
import todosReducer from './features/todos/todosSlice';
import { filterReducer } from './features/filters/filterSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
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
  blacklist: [counterSateName],
};

const persistedRootReducer = persistCombineReducers(persistConfig, {
  [counterSateName]: counterReducer,
  todos: todosReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) => {
    let middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    if (process.env.NODE_ENV === 'development') {
      middlewares = middlewares.concat(logger);
    }
    return middlewares;
  },
});

export const persistor = persistStore(store);
