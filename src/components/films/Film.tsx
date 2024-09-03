import React, {FC} from "react";
import styles from "./films.module.scss";
import {SearchFilm} from "../../types/SearchFilm";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../store/store";
import {addFilmInMyList} from "../../services/addFilmInMyList";
import {ThunkDispatch} from "@reduxjs/toolkit";
import {getDataUser} from "../../store/slices/UserSlice";
const Film: FC<{film: SearchFilm}> = ({film}) => {
	const navigate = useNavigate();
	const dispatchThunk = useDispatch<ThunkDispatch<any, any, any>>();
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
						onClick={() => {
							if (!isAuth) {
								navigate("/login");
							} else {
								addFilmInMyList(film)
									.then((data) => {
										console.log(data);
										dispatchThunk(getDataUser());
									})
									.catch((err) => console.log(err));
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
