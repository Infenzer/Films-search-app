import React, { useEffect, useState } from 'react'
import {MovieDetalisProps} from '../../script/movieDetalisTypes'
import Loader from '../Loader'
import MovieCard from './MovieCard'
import {IInfo} from '../../script/movieDetalisTypes'

let movieInfo: IInfo

const MovieDetalis: React.FC<MovieDetalisProps> = (props) => {
  console.log(props.match.params.id)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const URL = `https://www.omdbapi.com/?i=${props.match.params.id}&apikey=4a3b711b`

    fetch(URL)
      .then(res => res.json())
      .then((resData) => {
        console.log(resData)
        movieInfo = resData
        setLoading(false)
      })
  }, [])

  return(
    <React.Fragment>
      {loading ? (
        <div className="loader">
          <Loader/>
        </div>
      ) : (
        <div className = 'movie-detalis'>
          <div className="header">
            <h2><a href="/">НА ГЛАВНУЮ</a></h2>
          </div>
          <MovieCard info = {movieInfo}/>
        </div>
      )}
    </React.Fragment>
  )
}

export default MovieDetalis