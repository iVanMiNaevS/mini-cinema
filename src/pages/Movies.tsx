import React from "react";
import styles from "../global.module.scss";
import Search from "../components/search/Search";
import {useState} from "react";
import {SearchFilm} from "../types/SearchFilm";
import Films from "../components/films/Films";
import {NotFoundFilm} from "../components/notFoundFilm/NotFoundFilm";

export const Movies = () => {
	const [films, setFilms] = useState<SearchFilm[] | undefined>([]);
	return (
		<div className={styles.container}>
			<Search setFilms={setFilms} type="movie" />
			{films !== undefined ? <Films films={films} /> : <NotFoundFilm />}
		</div>
	);
};
