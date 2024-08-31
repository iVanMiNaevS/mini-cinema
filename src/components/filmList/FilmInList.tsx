import React, {FC} from "react";
import {SearchFilm} from "../../types/SearchFilm";
import {Link} from "react-router-dom";
import styles from "./FilmList.module.scss";
export const FilmInList: FC<{film: SearchFilm}> = ({film}) => {
	return (
		<div className={styles.card}>
			<img src={film.Poster} alt="poster" />
			<div className={styles.description}>
				<div className={styles.typeAndYear}>
					<p>{film.Type}</p>
					<p className={styles.year}>{film.Year}</p>
				</div>

				<h6>{film.Title}</h6>
				<div className={styles.buttons}>
					<Link to={`/pleer/${film.imdbID}`}>Watch</Link>
					<div className={styles.buttonFunc}>
						<button>
							<img src={require("../../imgs/eye-close.png")} alt="eye" />
						</button>
						<button>
							<img src={require("../../imgs/x-button.png")} alt="eye" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
