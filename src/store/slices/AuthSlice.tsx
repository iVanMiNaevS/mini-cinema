import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

const AuthSlice = createSlice({
	name: "Auth",
	initialState: {Auth: false},
	reducers: {
		changeAuth(state) {
			state.Auth = !state.Auth;
		},
	},
});

export const {changeAuth} = AuthSlice.actions;
export default AuthSlice.reducer;
