import React, {FC} from "react";
import styles from "./films.module.scss";
import {SearchFilm} from "../../types/SearchFilm";
import {Link} from "react-router-dom";
// import {useInView} from "react-intersection-observer";

const Film: FC<{film: SearchFilm}> = ({film}) => {
	return (
		<div className={styles.card}>
			<img src={film.Poster} alt="poster" />
			<div className={styles.description}>
				<div className={styles.typeAndYear}>
					<p>{film.Type}</p>
					<p className={styles.year}>{film.Year}</p>
				</div>

				<h6>{film.Title}</h6>
				<Link to={`/pleer/${film.imdbID}`}>Watch</Link>
				<button>+</button>
			</div>
		</div>
	);
};

export default Film;
