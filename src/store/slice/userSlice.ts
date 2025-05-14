import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import cacheAccessKeys from "@src/constants/cacheAccessKeys";

const initialState = {
  userData: <IUserData | undefined>{},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserData | undefined>) => {
      state.userData = action.payload;
      localStorage.setItem(
        cacheAccessKeys.USER_DATA,
        JSON.stringify(action.payload)
      );
    },
  },
});

export default userSlice.reducer;
export const userActions = {
  ...userSlice.actions,
};
