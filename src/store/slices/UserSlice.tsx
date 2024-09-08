import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilmFromDB, SearchFilm } from "../../types/SearchFilm";
import axios from "axios";
export type state = {
	avatar: string;
	listFilm: FilmFromDB[];
	status: string;
	error: string | unknown;
};

const initialState: state = { avatar: "", listFilm: [], status: "", error: "" };

export const getDataUser = createAsyncThunk(
	"UserData/getDataUser",
	async (_, { rejectWithValue }) => {
		const token = localStorage.getItem("token");
		try {
			const response = await axios.get("http://localhost:5000/data-user", {
				headers: { Authorization: `Bearer ${token}` },
			});

			return response.data;
		} catch (err) {
			if (axios.isAxiosError(err) && err.response) {
				return rejectWithValue(err.response?.data);
			}
		}
	}
);
export const addFilmInMyList = createAsyncThunk(
	"UserData/addFilmInMyList",
	async (film: SearchFilm, { rejectWithValue }) => {
		const token = localStorage.getItem("token");
		try {
			const response = await axios.post(
				"http://localhost:5000/add-film",
				{ newFilm: film },
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);

			return response.data;
		} catch (err) {
			console.log(err);
			if (axios.isAxiosError(err) && err.response) {
				return rejectWithValue(err.response?.data);
			}
		}
	}
);
export const deleteFilmFromMyList = createAsyncThunk(
	"UserData/deleteFilmFromMyList",
	async (film: SearchFilm, { rejectWithValue }) => {
		const token = localStorage.getItem("token");
		try {
			const response = await axios.delete("http://localhost:5000/delete-film", {
				data: { film: film },
				headers: { Authorization: `Bearer ${token}` },
			});
			return response.data;
		} catch (err) {
			console.log(err);
			if (axios.isAxiosError(err) && err.response) {
				return rejectWithValue(err.response?.data);
			}
		}
	}
);

type changeParams = {
	film: SearchFilm;
	watched: boolean;
};

export const changeWatchedFilm = createAsyncThunk(
	"UserData/changeWatchedFilm",
	async ({ film, watched }: changeParams, { rejectWithValue }) => {
		const token = localStorage.getItem("token");
		try {
			const response = await axios.patch(
				"http://localhost:5000/change-watched",
				{ film, watched },
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			return response.data;
		} catch (err) {
			console.log(err);
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
		builder.addCase(addFilmInMyList.pending, (state, action) => {
			state.status = "loading";
			state.error = "";
		});
		builder.addCase(
			addFilmInMyList.fulfilled,
			(state, action: PayloadAction<{ listFilm: FilmFromDB[] }>) => {
				state.status = "resolve";
				state.listFilm = action.payload.listFilm;
			}
		);
		builder.addCase(addFilmInMyList.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		});
		builder.addCase(deleteFilmFromMyList.pending, (state, action) => {
			state.status = "loading";
			state.error = "";
		});
		builder.addCase(
			deleteFilmFromMyList.fulfilled,
			(state, action: PayloadAction<{ listFilm: FilmFromDB[] }>) => {
				state.status = "resolve";
				state.listFilm = action.payload.listFilm;
			}
		);
		builder.addCase(deleteFilmFromMyList.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		});
		builder.addCase(changeWatchedFilm.pending, (state, action) => {
			state.status = "loading";
			state.error = "";
		});
		builder.addCase(
			changeWatchedFilm.fulfilled,
			(state, action: PayloadAction<{ listFilm: FilmFromDB[] }>) => {
				state.status = "resolve";
				state.listFilm = action.payload.listFilm;
			}
		);
		builder.addCase(changeWatchedFilm.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		});
	},
});

export const { removeAllData } = UserDataSlice.actions;
export default UserDataSlice.reducer;
