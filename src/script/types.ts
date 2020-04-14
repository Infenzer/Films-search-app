export interface SearchProps {
  search: (searchValue: string) => void
}

export interface MovieProps  {
  movie: IMovie
}

export interface IMovie {
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