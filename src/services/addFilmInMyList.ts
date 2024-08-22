import axios from "axios";
import {SearchFilm} from "../types/SearchFilm";
export async function addFilmInMyList(film: SearchFilm) {
	const token = localStorage.getItem("token");
	const response = await axios.post(
		"http://localhost:5000/add-film",
		{newFilm: film},
		{
			headers: {Authorization: `Bearer ${token}`},
		}
	);
	return response.data;
}
