import { combineReducers } from '@reduxjs/toolkit';
import user from './userActiveSlice';
import task from './taskSlice';
import modais from './modaisSlice';

const MainReducers = combineReducers({
  user,
  task,
  modais,
});

export default MainReducers;
