import { createAsyncThunk } from "@reduxjs/toolkit";
import spotifyApiInstance from "@src/axios/spotifyApi";
import axios from "axios";
import type {
  ICategoriesResponse,
  IFetchAccessTokenData,
} from "../types/spotifySlice";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export const fetchSpotifyAccessToken = createAsyncThunk(
  "spotify/fetchAccessToken",
  async (_, { rejectWithValue }) => {
    try {
      const tokenUrl = "https://accounts.spotify.com/api/token";

      const response = await axios.post<IFetchAccessTokenData>(
        tokenUrl,
        new URLSearchParams({ grant_type: "client_credentials" }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.log("🚀 ~ fetchSpotifyAccessToken error:", error);
      return rejectWithValue(error?.response?.data || "An error occurred");
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "spotify/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await spotifyApiInstance.get<ICategoriesResponse>(
        "/browse/categories"
      );
      return response.data; // or adjust based on actual response
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);
export const fetchCategoriesDetails = createAsyncThunk(
  "spotify/fetchCategoriesDetails",
  async (params, { rejectWithValue }) => {
    try {
      const response = await spotifyApiInstance.get(
        "/browse/categories/" + params?.id
      );
      return response.data; // or adjust based on actual response
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Unknown error");
    }
  }
);
