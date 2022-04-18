/* eslint-disable no-return-assign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
};

export const modaisSelectAll = (state) => state.main.modais;

const slice = createSlice({
  name: 'modais',
  initialState,

  reducers: {
    setModalState: (state, action) => action.payload,

    resetState: (state, action) => initialState,
  },
  extraReducers: {},
});

export const { setModalState, resetState } = slice.actions;

export default slice.reducer;
