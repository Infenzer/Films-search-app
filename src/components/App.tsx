import React, { useEffect, useState } from 'react'
import Search from './Search'
import {IMovie, IData} from '../script/types'
import Movie from './Movie'

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b'

const App: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMess, setErrorMess] = useState(false)

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(res => res.json())
      .then((data: IData) => {
        setMovies(data.Search)
        setLoading(false)
        console.log(data)
      })
  }, [])


  const search = (searchValue: string) => {
    setLoading(true)
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(res => res.json())
      .then((data: IData) => {
        console.log(data)
        if (data.Response === 'True') {
          setLoading(false)
          setErrorMess(false)
          setMovies(data.Search)
        } else {
          setErrorMess(true)
        }
      })
  }

  return (
    <React.Fragment>
      <Search search = {search}/>
      {loading && !errorMess ? (
        <div>Загрузка</div>
      ) : errorMess ? (
        <div>Ничего не найдено</div>
      ) : (
        <div className="movie-wrapper">
          {movies.map(movie => <Movie key = {movie.imdbID + movie.Title} movie ={movie}/>)}
        </div>
      )}
    </React.Fragment>
  )
}

export default App