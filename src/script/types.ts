export type SearchProps = {
  search: (searchValue: string) => void
}

export type MovieProps = {
  movie: IMovie
}

export type IMovie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface IData {
  Search: IMovie[]
  totalResults: string
  Response: 'True' | 'False'
}