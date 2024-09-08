import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import styles from "../global.module.scss";
import { FilmList } from "../components/filmList/FilmList";

export const MyList = () => {
	const isAuth = useSelector((store: IRootState) => store.AuthSlice.Auth);
	const { listFilm, status } = useSelector(
		(store: IRootState) => store.UserSlice
	);
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuth) {
			navigate("/login");
		}
	}, [isAuth]);
	return (
		<div className={styles.container}>
			{isAuth && status !== "loading" ? (
				listFilm.length > 0 ? (
					<FilmList films={listFilm} />
				) : (
					<h1>У вас пока нет фильмов в списке</h1>
				)
			) : (
				<h1>Loading</h1>
			)}
		</div>
	);
};
