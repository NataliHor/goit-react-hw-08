import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

// patrickimorti@gmail.com

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (_, action) => {
        console.log(action.payload);
        window.alert("Error!");
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (_, action) => {
        console.log(action);
        window.alert("Wrong login or password!");
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(logout.rejected, (_, action) => {
        console.log(action);
        window.alert("Error!");
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      });
  },
});

export default slice.reducer;
