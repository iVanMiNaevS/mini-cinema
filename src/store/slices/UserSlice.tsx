import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {SearchFilm} from "../../types/SearchFilm";
import axios from "axios";
export type state = {
	avatar: string;
	listFilm: SearchFilm[];
	status: string;
	error: string | unknown;
};

const initialState: state = {avatar: "", listFilm: [], status: "", error: ""};

export const getDataUser = createAsyncThunk(
	"UserData/getDataUser",
	async (_, {rejectWithValue}) => {
		const token = localStorage.getItem("token");
		try {
			const response = await axios.get("http://localhost:5000/data-user", {
				headers: {Authorization: `Bearer ${token}`},
			});

			return response.data;
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				return rejectWithValue(err.response?.data);
			}
		}
	}
);

const UserDataSlice = createSlice({
	name: "UserData",
	initialState,
	reducers: {
		removeAllData(state) {
			state.avatar = "";
			state.listFilm = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getDataUser.pending, (state, action) => {
			state.status = "loading";
			state.error = "";
		});
		builder.addCase(getDataUser.fulfilled, (state, action) => {
			state.status = "resolve";
			state.listFilm = action.payload.listFilm;
			state.avatar = action.payload.avatar;
		});
		builder.addCase(getDataUser.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		});
	},
});

export const {removeAllData} = UserDataSlice.actions;
export default UserDataSlice.reducer;
