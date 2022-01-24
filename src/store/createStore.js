import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const createStore = (initialState = {}) => {
  const store = configureStore({
    preloadedState: { ...initialState },
    reducer: rootReducer(),
    devTools: process.env.NODE_ENV !== 'production',
  });
  return store;
};
