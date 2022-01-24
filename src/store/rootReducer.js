import { combineReducers } from '@reduxjs/toolkit';
import mailsReducer from './slices/mailSlice';

const rootReducer = () =>
  combineReducers({
    mails: mailsReducer,
  });
export default rootReducer;
