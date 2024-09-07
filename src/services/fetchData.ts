import axios from "axios";
import {FilmFromDB, SearchFilm} from "../types/SearchFilm";

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


