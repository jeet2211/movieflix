import { createAction } from "@reduxjs/toolkit";
interface LoginPayload {
    username: string;
    password: string;
  }
  
export const loginRequest = createAction<LoginPayload>("auth/loginRequest");
export const loginSuccess = createAction("auth/loginSuccess");
export const loginFailure = createAction("auth/loginFailure");

export const guestLoginRequest = createAction("auth/guestLoginRequest");
export const guestLoginSuccess = createAction("auth/guestLoginSuccess");
export const guestLoginFailure = createAction("auth/guestLoginFailure");