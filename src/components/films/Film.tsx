import React, {FC} from "react";
import styles from "./films.module.scss";
import {SearchFilm} from "../../types/SearchFilm";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {addFilmInMyList} from "../../services/addFilmInMyList";

const Film: FC<{film: SearchFilm}> = ({film}) => {
	const navigate = useNavigate();
	const isAuth = useSelector<IRootState>((store) => store.AuthSlice.Auth);
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
						onClick={async () => {
							if (!isAuth) {
								navigate("/login");
							} else {
								console.log(await addFilmInMyList(film));
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
