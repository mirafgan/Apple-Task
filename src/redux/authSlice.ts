import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../interface/interfaces";

const initialState: AuthState = {
    isLogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LOGIN: (state) => { state.isLogged = true },
        LOGOUT: (state) => { state.isLogged = false }
    }
})
export const selectAuth = (state: any) => state.auth.isLogged
export const { LOGIN, LOGOUT } = authSlice.actions;
export default authSlice.reducer