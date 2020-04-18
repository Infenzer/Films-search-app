import React, { useEffect, useState, useReducer } from 'react'
import Search from './Search'
import {IMovie, IData} from '../../script/mainPageTypes'
import MoviesList from './MoviesList'
import Loader from '../Loader'

let page = 1

const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&page=1&apikey=4a3b711b`

const MainPage: React.FC = () => {
  //Состояния поиска
  const [value, setValue] = useState(``)
  const [type, setType] = useState('all')
  const [year, setYear] = useState('')

  //Общие состояния
  const [moviesList, setMoviesList] = useState<IMovie[][]>([])
  const [loading, setLoading] = useState(true)
  const [errorMess, setErrorMess] = useState(false)

  //Состояние кнопки
  const [btnActive, setBtnActive] = useState(true)

  useEffect(() => {
    moviesRequest(MOVIE_API_URL)
  }, [])

  const moviesRequest = (searchURL: string) => {
    fetch(searchURL)
      .then(res => res.json())
      .then((data: IData) => {
        //console.log(data, searchURL)
        if (data.Response === 'True') {
          if (parseInt(data.totalResults) <= 10) {
            setBtnActive(false)
          } else {
            setBtnActive(true)
          }

          setLoading(false)
          setErrorMess(false)

          setMoviesList(prevState => [...prevState, data.Search])
        } else {
          setErrorMess(true)
        }
      })
  }

  const handleMoviesLoader = () => {
    page++

    const URL = getURL(value,year,page,type)

    setLoading(true)
    moviesRequest(URL)
  }

  const search = () => {
    page = 1

    const URL = getURL(value,year,page,type)

    setMoviesList([])
    setLoading(true)
    moviesRequest(URL)
  }

  return (
    <div className="main-page">
      <div className="header">
        <Search search = {search} value = {value} setType = {setType} setValue = {setValue} setYear = {setYear}/>
      </div>
      {(errorMess) ? (
        <div>Ничего не найдено</div>
      ) : (
        <div className="container-lg movies-list-wrapper">
          {moviesList.map((movies, index) => <MoviesList key = {index} movies = {movies} loading = {loading}/>)}

          {loading ? (
            <Loader/>
          ) : (
            <div className="btn-wrapper">
              {btnActive && (
                <button onClick = {handleMoviesLoader} className = 'btn-load-movie btn btn-info'>Загрузить ещё</button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const getURL = (value: string, year: string, page: number, type: string) => {
  const urlPage = `&page=${page}`
  const urlValue = value !== '' ? `s=${value}` : 's=man' 
  const urlType = type !== 'all' ? `&type=${type}` : ''
  const urlYear = `&y=${year}`

  const URL = `https://www.omdbapi.com/?${urlValue + urlYear + urlType + urlPage}&apikey=4a3b711b`
  return URL
}

export default MainPage
