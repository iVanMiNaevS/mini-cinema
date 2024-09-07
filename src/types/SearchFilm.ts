export interface SearchFilm {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface FilmFromDB extends SearchFilm{
  watched: boolean
}