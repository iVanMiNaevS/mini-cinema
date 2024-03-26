import axios from "axios";
import { SearchFilm } from "../types/SearchFilm";

export const FetchingSearchFilms = async (
  apiKey: string,
  searchValue: string
): Promise<SearchFilm[]> => {
  const response = await axios.get<{ Search: SearchFilm[] }>(
    `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}`
  );

  return response.data.Search;
};
