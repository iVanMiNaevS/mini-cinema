import React, { FC, useEffect, useState } from "react";
import { SearchFilm } from "../../types/SearchFilm";
import Film from "./Film";
import styles from "./films.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Films: FC<{ films: SearchFilm[] | undefined }> = ({ films }) => {
	const [viewSlides, setViewSlides] = useState(3);
	const [space, setSpace] = useState(64);
	// window.addEventListener("load", () => {
	// 	if (window.innerWidth <= 768) {
	// 		setViewSlides(1);
	// 	} else if (window.innerWidth <= 1300) {
	// 		setViewSlides(2);
	// 	} else if (window.innerWidth >= 1300) {
	// 		setViewSlides(3);
	// 	}
	// });
	window.addEventListener("resize", () => {
		if (window.innerWidth <= 680) {
			setViewSlides(1);
		} else if (window.innerWidth <= 1250) {
			setSpace(45);
			setViewSlides(2);
		} else if (window.innerWidth >= 1250) {
			setSpace(64);
			setViewSlides(3);
		}
	});
	useEffect(() => {
		if (window.innerWidth <= 680) {
			setViewSlides(1);
		} else if (window.innerWidth <= 1250) {
			setSpace(50);
			setViewSlides(2);
		} else if (window.innerWidth >= 1250) {
			setSpace(64);
			setViewSlides(3);
		}
	}, []);
	return (
		<>
			<Swiper
				spaceBetween={space}
				slidesPerView={viewSlides}
				onSlideChange={() => console.log()}
				onSwiper={(swiper: any) => console.log()}
				className={styles.swiper}
			>
				{films?.map((film) => {
					return (
						<SwiperSlide key={film.imdbID} className={styles.swiperItem}>
							<Film key={film.imdbID} film={film} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Films;
