import { createSlice } from "@reduxjs/toolkit";
import cacheAccessKeys from "@src/constants/cacheAccessKeys";
import {
  fetchCategories,
  fetchSpotifyAccessToken,
} from "../thunk/spotifyThunk";
import type { ICategoriesResponse } from "../types/spotifySlice";

interface SpotifyState {
  accessToken: string | null;
  categoriesData: ICategoriesResponse | null;
}

const initialState: SpotifyState = {
  accessToken: null,
  categoriesData: null,
};

const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpotifyAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.access_token;
        localStorage.setItem(
          cacheAccessKeys.SPOTIFY_AUTH_TOKEN,
          action.payload.access_token
        );
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoriesData = action.payload;
      });
  },
});

export default spotifySlice.reducer;
