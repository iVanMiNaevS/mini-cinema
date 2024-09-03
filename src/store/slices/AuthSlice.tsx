import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

const AuthSlice = createSlice({
	name: "Auth",
	initialState: {Auth: false},
	reducers: {
		changeAuth(state, actions: PayloadAction<boolean>) {
			state.Auth = actions.payload;
		},
	},
});

export const {changeAuth} = AuthSlice.actions;
export default AuthSlice.reducer;
