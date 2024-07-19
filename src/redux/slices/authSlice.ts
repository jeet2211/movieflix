import { createSlice } from "@reduxjs/toolkit";
import { loginRequest, loginSuccess, loginFailure, guestLoginRequest, guestLoginSuccess, guestLoginFailure } from "../actions/authActions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        accountId: localStorage.getItem('accountId'),
        sessionId: localStorage.getItem('sessionId'),
        error: null as string | null,
        status: "idle",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginRequest, (state) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(loginSuccess, (state, action) => {
            state.status = "succeeded";
            state.accountId = action.payload.account_id;
            state.sessionId = action.payload.session_id;
            state.error = null;
        })
        builder.addCase(loginFailure, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        })
        builder.addCase(guestLoginRequest, (state) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(guestLoginSuccess, (state, action) => {
            state.status = "succeeded";
            state.sessionId = action.payload.guest_session_id;
            state.error = null;
        })
        builder.addCase(guestLoginFailure, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});

export default authSlice.reducer;
