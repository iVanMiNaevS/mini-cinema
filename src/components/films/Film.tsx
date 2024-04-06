import React, {FC} from 'react'
import styles from "./films.module.scss"
import { SearchFilm } from '../../types/SearchFilm'
import { useInView } from 'react-intersection-observer';

const Film:FC<{film: SearchFilm}> = ({film}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  return (
    <div className={inView ? styles.card : `${styles.card} ${styles.notView}`} ref={ref}>
      <img src={film.Poster} alt="poster" />
      <div className={styles.description}>
        <p>{film.Type}</p>
        <p className={styles.year}>{film.Year}</p>
        <h6>{film.Title}</h6>
      </div>
    </div>
  )
}

export default Film
