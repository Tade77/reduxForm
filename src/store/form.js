import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};
const formSlice = createSlice({
  name: "userForm",
  initialState,
  reducers: {
    addUserForm(state, action) {
      const userInfo = action.payload;
      state.users.push(userInfo);
    },
  },
});
export const { addUserForm } = formSlice.actions;
export default formSlice.reducer;
