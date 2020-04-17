import { SetStateAction } from "react";

export interface SearchProps {
  search: () => void
  value: string
  setValue: React.Dispatch<SetStateAction<string>>
  setType: React.Dispatch<SetStateAction<string>>
  setYear: React.Dispatch<SetStateAction<string>>
}

export interface ModalFilterProps {
  setType: React.Dispatch<SetStateAction<string>>
  setYear: React.Dispatch<SetStateAction<string>>
}


export interface MoviesListPorps {
  movies: IMovie[]
  loading: boolean
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