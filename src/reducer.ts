import { IMovie } from "./script/types";

export enum ActinType {
  FIND_SUCCESS = 'FIND_SUCCESS',
  FIND_ERROR = 'FIND_ERROR',
  FILM_LOADER = 'FILM_LOADER'
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
    case ActinType.FIND_SUCCESS:
      return {
        errorMess: false,
        loading: false,
        movies: action.payload.movies
      }
    case ActinType.FIND_ERROR: 
      return {
        ...state,
        loading: false,
        errorMess: true
      }
    case ActinType.FILM_LOADER: 
      return {
        ...state,
        loading: true
      }
    default: state
  }
}

export default reducer
