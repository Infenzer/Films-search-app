import React, { useEffect, useState, useReducer } from 'react'
import Search from './Search'
import {IMovie, IData} from '../script/types'
import Movie from './Movie'
import reducer, {IState, ActinType} from '../reducer'

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&page=2&apikey=4a3b711b'

const initialState: IState = {
  loading: true,
  errorMess: false,
  movies: []
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(res => res.json())
      .then((data: IData) => {
        dispatch({
          type: ActinType.findFilmSuccess,
          payload: {
            movies: data.Search
          }
        })
      })
  }, [])


  const search = (searchValue: string) => {
    dispatch({type: ActinType.filmLoader})
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(res => res.json())
      .then((data: IData) => {
        console.log(data)
        if (data.Response === 'True') {
          dispatch({
            type: ActinType.findFilmSuccess,
            payload: {
              movies: data.Search
            }
          })
        } else {
          dispatch({type: ActinType.findFilmError})
        }
      })
  }

  const {loading, errorMess, movies } = state

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