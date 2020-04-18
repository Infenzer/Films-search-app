import React, { useEffect, useState } from 'react'
import {MovieDetalisProps} from '../../script/movieDetalisTypes'
import Loader from '../Loader'
import MovieCard from './MovieCard'
import {IInfo} from '../../script/movieDetalisTypes'

let movieInfo: IInfo

const MovieDetalis: React.FC<MovieDetalisProps> = (props) => {
  console.log(props.match.params.id)

  const [loading, setLoading] = useState(true)
  const [errorMess, setErrorMess] = useState(false)

  useEffect(() => {
    const URL = `https://www.omdbapi.com/?i=${props.match.params.id}&apikey=4a3b711b`

    fetch(URL)
      .then(res => res.json())
      .then((resData) => {
        if (resData.Response === 'True') {
          //console.log(resData)
          movieInfo = resData
          setLoading(false)
          setErrorMess(false)
        } else {
          setErrorMess(true)
        }
      })
  }, [])

  return(
    <React.Fragment>
      {(loading && !errorMess) ? (
        <div className="loader">
          <Loader/>
        </div>
      ) : (errorMess) ? (
        <div>Ошибка</div>
      ) : (
        <MovieCard info = {movieInfo}/>
      )}
    </React.Fragment>
  )
}

export default MovieDetalis