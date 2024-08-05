import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Pleer} from "../components/pleer/Pleer";
import globalStyle from "../global.module.scss";
export const PleerPage = () => {
	const params = useParams();
	useEffect(() => {
		const sc = document.createElement("script");
		sc.src = "https://kinobox.tv/kinobox.min.js";
		document.body.appendChild(sc);
		const sc2 = document.createElement("script");
		setTimeout(() => {
			sc2.innerText = `kbox(".kinobox_player", {search: {imdb: "${params.id}"}});`;
			document.body.appendChild(sc2);
		}, 100);

		return () => {
			document.body.removeChild(sc);

			setTimeout(() => {
				document.body.removeChild(sc2);
			}, 100);
		};
	}, []);

	return (
		<div className={globalStyle.container}>
			<Pleer />
		</div>
	);
};
