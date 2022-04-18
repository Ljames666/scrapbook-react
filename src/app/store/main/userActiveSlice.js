/* eslint-disable camelcase */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import ApiService from '../../services/api';

export const getUser = createAsyncThunk('user/get', async (user_id, { dispatch }) => {
  const response = ApiService.doGet(`/cadastro/${user_id}`);

  if (!response) {
    return [];
  }

  return response;
});

export const userSelectAll = (state) => state.user;

const slice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-return-assign
    [getUser.fulfilled]: (state, action) => (state = action.payload),
  },
});

export const { updateOne, updateMany, setMany, removeMany } = slice.actions;

export default slice.reducer;
