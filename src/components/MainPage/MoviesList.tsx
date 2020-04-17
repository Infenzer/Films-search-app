import React from 'react'
import Movie from './Movie'
import { MoviesListPorps } from '../../script/mainPageTypes'

const MoviesList: React.FC<MoviesListPorps> = (props) => {
  const movies = props.movies
  return (
    <React.Fragment>
      {movies.map(movie => <Movie key = {movie.imdbID + movie.Title} movie ={movie}/>)}
    </React.Fragment>
  )
}

export default MoviesList