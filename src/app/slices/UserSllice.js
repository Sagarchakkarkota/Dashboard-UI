import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  userSliceData: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setData: (state, { payload }) => {
      state.data = payload;
    },
    setUserSliceData: (state, { payload }) => {
      state.userSliceData = state.userSliceData.concat(payload);
    },
  },
});

export const { setUserSliceData, setData } = userSlice.actions;

export default userSlice.reducer;
