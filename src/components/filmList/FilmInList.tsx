import React, { FC } from "react";
import { SearchFilm } from "../../types/SearchFilm";
import { Link } from "react-router-dom";
import styles from "./FilmList.module.scss";
import { useDispatch } from "react-redux";
import { deleteFilmFromMyList } from "../../store/slices/UserSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
export const FilmInList: FC<{ film: SearchFilm }> = ({ film }) => {
	const dispatchThunk = useDispatch<ThunkDispatch<any, any, any>>();
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
						<button
							onClick={() => {
								dispatchThunk(deleteFilmFromMyList(film));
							}}
						>
							<img src={require("../../imgs/x-button.png")} alt="delete" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
