import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createShortLink = createAsyncThunk(
  'shortenedLinks/createShortLink',
  async function (link, { rejectWithValue }) {
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      const data = response.json();
      return data;
    }
    catch (error) {
      return rejectWithValue(error.message);
    }
  });


const linkSlice = createSlice({
  name: 'links',
  initialState: {
    inputLinks: [],
    shortenedLinks: [],
    loadingStatus: null,
    errorStatus: null,
    isEmpty: true,
  },
  reducers: {
    addFullLink(state, action) {
      state.inputLinks.push(action.payload);
      state.isEmpty = false;
    }
  },
  extraReducers: {
    [createShortLink.pending]: (state) => {
      state.loadingStatus = 'loading';
    },
    [createShortLink.fulfilled]: (state, action) => {
      state.loadingStatus = 'resolved';
      state.shortenedLinks.push(action.payload);
    },
    [createShortLink.rejected]: (state, action) => {
      state.loadingStatus = 'rejected';
      state.errorStatus = action.payload;
    }
  }
});

export const { addFullLink, addShortenedLink } = linkSlice.actions;
export default linkSlice.reducer;
