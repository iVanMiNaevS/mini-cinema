import React, {FC} from "react";
import styles from "./films.module.scss";
import {SearchFilm} from "../../types/SearchFilm";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Film: FC<{film: SearchFilm}> = ({film}) => {
	const navigate = useNavigate();
	let isAuth = false;
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
					<button
						onClick={() => {
							if (!isAuth) {
								navigate("/login");
							}
						}}
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default Film;
