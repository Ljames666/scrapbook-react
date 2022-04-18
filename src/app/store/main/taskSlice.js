/* eslint-disable camelcase */
import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

import ApiService from '../../services/api';

export const getTask = createAsyncThunk('task/get', async (userId, { dispatch }) => {
  const response = ApiService.doGet(`/messages/${userId}`);

  if (!response) {
    return [];
  }

  return response;
});
export const postTask = createAsyncThunk('task/post', async ({ userId, data }, { dispatch }) => {
  return ApiService.doPost(`/messages/${userId}`, data);
});

export const putTask = createAsyncThunk('task/put', async ({ id, data }, { dispatch }) => {
  return ApiService.doPut(`/messages/${id}`, data);
});
export const deleteTask = createAsyncThunk('task/delete', async (id, { dispatch }) => {
  const response = ApiService.doDelete(`/messages/${id}`);

  dispatch(removeTask(id));

  return response;
});
const adapter = createEntityAdapter({
  selectedId: (state) => state.id,
});
export const { selectAll: taskSelectAll, selectById: taskById } = adapter.getSelectors(
  (state) => state.main.task
);

const slice = createSlice({
  name: 'task',
  initialState: adapter.getInitialState(),
  reducers: {
    addTask: adapter.addOne,
    updateTask: adapter.updateOne,
    removeTask: adapter.removeOne,
  },
  extraReducers: {
    // eslint-disable-next-line no-return-assign
    [getTask.fulfilled]: adapter.setAll,
  },
});

export const { addTask, updateTask, removeTask } = slice.actions;

export default slice.reducer;
