import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@redux/store';

const uiState = (state: RootState) => state.ui;

export const getIsSidebarActive = createSelector(
  uiState,
  (state) => state.isSidebarActive,
);
