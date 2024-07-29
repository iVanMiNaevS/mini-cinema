import React, {FC, useState} from "react";
import {SearchFilm} from "../../types/SearchFilm";
import Film from "./Film";
import styles from "./films.module.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
const Films: FC<{films: SearchFilm[] | undefined}> = ({films}) => {
	const [viewSlides, setViewSlides] = useState(3);
	window.addEventListener("load", () => {
		if (window.screen.width <= 768) {
			setViewSlides(1);
		} else if (window.screen.width <= 1300) {
			setViewSlides(2);
		} else if (window.screen.width >= 1300) {
			setViewSlides(3);
		}
	});
	window.addEventListener("resize", () => {
		if (window.screen.width <= 768) {
			setViewSlides(1);
		} else if (window.screen.width <= 1300) {
			setViewSlides(2);
		} else if (window.screen.width >= 1300) {
			setViewSlides(3);
		}
	});
	return (
		<>
			<Swiper
				spaceBetween={64}
				slidesPerView={viewSlides}
				onSlideChange={() => console.log("slide change")}
				onSwiper={(swiper: any) => console.log(swiper)}
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
