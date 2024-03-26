import styles from "./global.module.scss"
import Search from './components/search/Search';
import { useState } from "react";
import { SearchFilm } from "./types/SearchFilm";
import Films from "./components/films/Films";

function App() {
  const [films, setFilms] = useState<SearchFilm[] | undefined>([])
  
  return (
    <div className={styles.container}>
      <Search setFilms={setFilms}/>
      <Films films={films}/>
    </div>
  );
}

export default App;
