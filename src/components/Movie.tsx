import React from 'react'
import { MovieProps } from '../script/types'

const Movie: React.FC<MovieProps> = (props) => {
  const movie = props.movie
  return (
    <div className="movie">
      <div className="title"> {movie.Title} </div>
      <div className="poster">
        <img className="poster-img" src={movie.Poster} alt="" width = "250px"/>
      </div>
      <div className="year"> {movie.Year} </div>
    </div>
  )
}

export default Movie