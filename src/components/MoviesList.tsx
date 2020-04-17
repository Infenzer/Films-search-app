import React from 'react'
import Movie from './Movie'
import { MoviesListPorps } from '../script/types'

const MoviesList: React.FC<MoviesListPorps> = (props) => {
  const movies = props.movies
  return (
    <React.Fragment>
      {props.loading ? (
        <div>Загрузка</div>
      ) : (
        <div className="movies-list">
          {movies.map(movie => <Movie key = {movie.imdbID + movie.Title} movie ={movie}/>)}
        </div>
      )
    }
    </React.Fragment>
  )
}

export default MoviesList