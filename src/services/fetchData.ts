import axios from "axios";
import {SearchFilm} from "../types/SearchFilm";

export const FetchingSearchFilms = async (
	searchValue: string,
	type: string
): Promise<SearchFilm[]> => {
	const apiKey = "3e625b96";
	const response = await axios.get<{Search: SearchFilm[]}>(
		`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}&type=${type}`
	);
	return response.data.Search;
};

export const FetchingListFilm = async (): Promise<SearchFilm[]> => {
	const token = localStorage.getItem("token");
	const response = await axios.get(`http://localhost:5000/list-film`, {
		headers: {Authorization: `Bearer ${token}`},
	});
	return response.data;
};
