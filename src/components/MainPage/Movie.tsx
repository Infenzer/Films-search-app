import React from 'react'
import { MovieProps } from '../../script/mainPageTypes'

const DEFAULT_POSTER = 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg'

const Movie: React.FC<MovieProps> = (props) => {
  const movie = props.movie
  const poster = movie.Poster === 'N/A' ? DEFAULT_POSTER : movie.Poster
  return (
    <div className="movie">
      <a href={`/movie/${movie.imdbID}`}>
        <div className="title p-3 mb-2 bg-secondary text-white"> {movie.Title} ({movie.Type}) </div>
        <div className="poster">
          <img className="poster-img" src={poster}/>
        </div>
        <div className="year">
          <b> {movie.Year} </b>
        </div>
      </a>
    </div>
  )
}

export default Movie