import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice.js';
import bazarReducer from './bazarSlice';

const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
};
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const bazarPersistConfig = {
  key: 'bazar',
  version: 1,
  storage,
};
const persistedBazarReducer = persistReducer(bazarPersistConfig, bazarReducer);

const rootReducer = combineReducers({
  user: persistedUserReducer,
  bazar: persistedBazarReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
