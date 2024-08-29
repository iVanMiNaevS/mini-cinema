import React, {useEffect, useState} from "react";
import {FetchingListFilm} from "../services/fetchData";
import {SearchFilm} from "../types/SearchFilm";
import {useSelector} from "react-redux";
import {IRootState} from "../store/store";
import {useNavigate} from "react-router-dom";
export const MyList = () => {
	const isAuth = useSelector<IRootState>((store) => store.Auth);
	const [list, setList] = useState<SearchFilm[]>([]);
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuth) {
			navigate("/login");
		} else {
			FetchingListFilm()
				.then((data) => setList(data))
				.catch((e) => console.log(e));
		}
	}, [isAuth]);
	return <div>MyList</div>;
};
