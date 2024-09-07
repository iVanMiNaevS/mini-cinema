import React, { FC } from "react";
import { FilmFromDB } from "../../types/SearchFilm";
import { FilmInList } from "./FilmInList";
import styles from "./FilmList.module.scss";
export const FilmList: FC<{ films: FilmFromDB[] }> = ({ films }) => {
	return (
		<div className={styles.list}>
			{films.map((film) => {
				return <FilmInList key={film.imdbID} film={film} />;
			})}
		</div>
	);
};
