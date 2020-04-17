import React, { useEffect, useState, useReducer } from 'react'
import Search from './Search'
import {IMovie, IData} from '../script/types'
import MoviesList from './MoviesList'

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&page=2&apikey=4a3b711b'

const App: React.FC = () => {
  const [moviesList, setMoviesList] = useState([])
  const [movies, setMovies] = useState<IMovie[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMess, setErrorMess] = useState(false)

  useEffect(() => {
    filmsRequest(MOVIE_API_URL)
  }, [])

  const filmsRequest = (searchURL: string) => {
    fetch(searchURL)
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

  const search = (value: string, type: string, year: string) => {
    const urlValue = `s=${value}`
    const urlType = type !== 'all' ? `&type=${type}` : ''
    const urlYear = year !== '' ? `&y=${year}` : ''

    const URL = `https://www.omdbapi.com/?${urlValue + urlYear + urlType}&apikey=4a3b711b`
    setLoading(true)
    filmsRequest(URL)
  }

  return (
    <div className="container-fluid">
      <Search search = {search}/>
      {errorMess ? (
        <div>Ничего не найдено</div>
      ) : (
        <div className="movies-list-wrapper">
          <MoviesList movies = {movies} loading = {loading}/>
        </div>
      )}
    </div>
  )
}

export default App