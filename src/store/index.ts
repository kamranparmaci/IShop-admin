import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import authReducer from './slices/auth';
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  version: 1,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof persistedReducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
) => {
  return useSelector(selector);
};

export default store;
