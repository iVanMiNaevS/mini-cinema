import React, { FC, useState, Dispatch, SetStateAction } from 'react'
import { SearchFilm } from '../../types/SearchFilm'
import { FetchingSearchFilms } from '../../services/fetchingSearchFilms'
import styles from "./search.module.scss"

interface ISearch{
  setFilms: Dispatch<SetStateAction<SearchFilm[] | undefined>>
}

const Search:FC<ISearch>= ({setFilms}) =>{

  
  const [value , setValue] = useState<string>("")

  return (
    <form method="get" className={styles.form} onSubmit={(e)=>{
      e.preventDefault();
      FetchingSearchFilms( value).then((films)=>setFilms(films))
    }}>
      <input className={styles.search} placeholder={"Find Film"} onChange={(e)=>{
        setValue(e.target.value)
      }} value={value}/>
    </form>
  )
}

export default Search
