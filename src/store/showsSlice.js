import { createSlice } from '@reduxjs/toolkit';
import { GetShowsList } from './operations';

const initialState = {
  isLoading: false,
  showsList: [],
  errorMessage: null,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetShowsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = null;
        state.showsList = payload;
      })
      .addMatcher(
        action => {
          return action.type.endsWith('/pending');
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/rejected');
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload.message;
        }
      );
  },
});

export const showsReducer = showsSlice.reducer;
// export const {  } = showsSlice.actions;
