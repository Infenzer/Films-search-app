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
          type: ActinType.FIND_SUCCESS,
          payload: {
            movies: data.Search
          }
        })
      })
  }, [])


  const search = (searchValue: string) => {
    dispatch({type: ActinType.FILM_LOADER})
    fetch(searchValue)
      .then(res => res.json())
      .then((data: IData) => {
        console.log(data)
        if (data.Response === 'True') {
          dispatch({
            type: ActinType.FIND_SUCCESS,
            payload: {
              movies: data.Search
            }
          })
        } else {
          dispatch({type: ActinType.FIND_ERROR})
        }
      })
  }

  const {loading, errorMess, movies } = state

  return (
    <React.Fragment>
      <div className="container-fluid">
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
      </div>
    </React.Fragment>
  )
}

export default App