import React, { useEffect, useState, useReducer } from 'react'
import Search from './Search'
import {IMovie, IData} from '../script/types'
import MoviesList from './MoviesList'

let urlValue = 's=man'
let urlType = ''
let urlYear = ''
let page = 1

const MOVIE_API_URL = `https://www.omdbapi.com/?${urlValue}&page=${page}&apikey=4a3b711b`

const App: React.FC = () => {
  const [moviesList, setMoviesList] = useState<IMovie[][]>([])
  const [loading, setLoading] = useState(true)
  const [errorMess, setErrorMess] = useState(false)

  useEffect(() => {
    moviesRequest(MOVIE_API_URL)
  }, [])

  const moviesRequest = (searchURL: string) => {
    fetch(searchURL)
      .then(res => res.json())
      .then((data: IData) => {
        console.log(data, searchURL)
        if (data.Response === 'True') {
          setLoading(false)
          setErrorMess(false)

          setMoviesList(prevState => [...prevState, data.Search])
        } else {
          setErrorMess(true)
        }
      })
  }

  const handleMoviesLoader = () => {
    page ++
    const urlPage = `&page=${page}`
    const URL = `https://www.omdbapi.com/?${urlValue + urlYear + urlType + urlPage}&apikey=4a3b711b`

    setLoading(true)
    moviesRequest(URL)
  }

  const search = (value: string, type: string, year: string) => {
    const urlPage = `&page=1`
    urlValue = `s=${value}`
    urlType = type !== 'all' ? `&type=${type}` : ''
    urlYear = `&y=${year}` 

    const URL = `https://www.omdbapi.com/?${urlValue + urlYear + urlType + urlPage}&apikey=4a3b711b`
    setMoviesList([])
    setLoading(true)
    moviesRequest(URL)
  }

  return (
    <div className="container-fluid">
      <Search search = {search}/>
      {(errorMess) ? (
        <div>Ничего не найдено</div>
      ) : (
        <div className="movies-list-wrapper">
          {moviesList.map((movies, index) => <MoviesList key = {index} movies = {movies} loading = {loading}/>)}
          
          {loading ? (
            <div>Загрузка</div>
          ) : (
            <button onClick = {handleMoviesLoader} className = 'btn-load-movie btn btn-info'>Загрузить ещё</button>
          )}
        </div>
      )}
    </div>
  )
}

export default App
