import React, {FC} from 'react'
import styles from "./films.module.scss"
import { SearchFilm } from '../../types/SearchFilm'
const Film:FC<{film: SearchFilm}> = ({film}) => {
  return (
    <div className={styles.card}>
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
