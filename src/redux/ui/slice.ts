import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// models
import { InitialState } from './types';

const initialState: InitialState = { isSidebarActive: false };

const reducers = {
  setSidebarActive: (state: InitialState, action: PayloadAction<boolean>) => {
    state.isSidebarActive = action.payload;
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers,
});

export const uiActions = { ...uiSlice.actions }; // + ...thunks

export default uiSlice.reducer;
