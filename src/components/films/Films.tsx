import React, {FC} from 'react'
import { SearchFilm } from '../../types/SearchFilm'
import Film from './Film'
import styles from "./films.module.scss"
const Films:FC<{films: SearchFilm[] | undefined}> = ({films}) => {
  return (
    <div className={styles.containerFilms}>
      {films?.map(film=>{
        return <Film key={film.imdbID} film={film}/>
        
      })}
    </div>
  )
}

export default Films
