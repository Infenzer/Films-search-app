import { IMovie } from "./script/types";

export enum ActinType {
  findFilmSuccess = 'FILM_FIND_SUCCESS',
  findFilmError = 'FILM_FIND_ERROR',
  filmLoader = 'FILM_LOADER'
}

export interface IState {
  movies: IMovie[]
  loading: boolean
  errorMess: boolean
}

export interface IAction {
  type: ActinType
  payload?: {
    movies: IMovie[]
  }
}

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch(action.type) {
    case ActinType.findFilmSuccess:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies
      }
    case ActinType.findFilmError: 
      return {
        ...state,
        loading: false,
        errorMess: true
      }
    case ActinType.filmLoader: 
      return {
        ...state,
        loading: true
      }
    default: state
  }
}

export default reducer
