import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createSession, createGuestSession, createRequestToken, validateWithLogin } from "../../api/api";

export const login: any = createAsyncThunk("auth/login", async ({ username, password }: { username: string, password: string }) => {
    const requestTokenResponse = await createRequestToken();
    const validatedResponse = await validateWithLogin(username, password, requestTokenResponse.request_token);
    const sessionResponse = await createSession(validatedResponse.request_token);
    localStorage.setItem('accountId', sessionResponse.account_id);
    localStorage.setItem('sessionId', sessionResponse.session_id);
    return sessionResponse;
});

export const guestLogin: any = createAsyncThunk("auth/guestLogin", async () => {
    const guestSessionResponse = await createGuestSession();
    localStorage.setItem('sessionId', guestSessionResponse.guest_session_id);
    return guestSessionResponse;
});

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
        builder.addCase(login.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.accountId = action.payload.account_id;
            state.sessionId = action.payload.session_id;
            state.error = null;
        })
        builder.addCase(login.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message as string;
        })
        builder.addCase(guestLogin.pending, (state) => {
            state.status = "loading";
            state.error = null;
        })
        builder.addCase(guestLogin.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.sessionId = action.payload.guest_session_id;
            state.error = null;
        })
        builder.addCase(guestLogin.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    }
});

export default authSlice.reducer;
