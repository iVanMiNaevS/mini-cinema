import React, {useEffect, useState} from "react";
import {FetchingListFilm} from "../services/fetchData";
import {SearchFilm} from "../types/SearchFilm";
import {useSelector} from "react-redux";
import {IRootState} from "../store/store";
import {useNavigate} from "react-router-dom";
import styles from "../global.module.scss";
import {FilmList} from "../components/filmList/FilmList";

export const MyList = () => {
	const isAuth = useSelector<IRootState>((store) => store.AuthSlice.Auth);
	const [list, setList] = useState<SearchFilm[]>([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuth) {
			navigate("/login");
		} else {
			FetchingListFilm()
				.then((data) => {
					setLoading(false);
					setList(data);
					localStorage.setItem("countFilm", String(data.length));
				})
				.catch((e) => console.log(e));
		}
	}, [isAuth]);
	return (
		<div className={styles.container}>
			{}
			{loading === true ? (
				<h1>Loading...</h1>
			) : list.length > 0 ? (
				<FilmList films={list} />
			) : (
				<h1>У вас пока нет фильмов в списке</h1>
			)}
		</div>
	);
};
