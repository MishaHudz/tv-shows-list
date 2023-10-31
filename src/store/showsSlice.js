import { createSlice } from '@reduxjs/toolkit';
import { GetShowsList } from './operations';

const initialState = {
  show: null,
  showsList: null,
  isLoading: false,
  errorMessage: null,
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    clearShows: state => {
      state.isLoading = false;
      state.showsList = null;
      state.show = null;
    },
    findShow: (state, { payload }) => {
      state.show = state.showsList?.find(
        el => el?.show.id === Number(payload)
      ).show;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(GetShowsList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.errorMessage = null;
        state.showsList = payload;
        state.show = null;
      })
      .addMatcher(
        action => {
          return action.type.endsWith('/pending');
        },
        state => {
          state.isLoading = true;
          state.showsList = null;
          state.show = null;
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
export const { clearShows, findShow } = showsSlice.actions;
