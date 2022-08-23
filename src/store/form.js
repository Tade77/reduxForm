import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "userForm",
  initialState: [],
  reducers: {
    addUserForm(state, action) {
      const userInfo = action.payload;
      state.push(userInfo);
    },
  },
});
export const { addUserForm } = formSlice.actions;
export default formSlice.reducer;
