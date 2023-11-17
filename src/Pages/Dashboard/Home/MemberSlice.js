import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalMembers: [],
  isModal: false,
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMembers: (state, { payload }) => {
      state.totalMembers = [payload, ...state.totalMembers];
    },
    setIsModal: (state, { payload }) => {
      state.isModal = payload;
    },
  },
});

export const { setMembers, setIsModal } = memberSlice.actions;

export default memberSlice.reducer;
