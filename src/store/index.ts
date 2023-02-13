import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './slices/auth';
import { persistCombineReducers } from 'redux-persist';
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
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: false,
      },
    });
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

setupListeners(store.dispatch as AppDispatch);

export default store;
