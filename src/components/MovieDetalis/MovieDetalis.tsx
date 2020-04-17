import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import {MovieDetalisProps} from '../../script/movieDetalisTypes'


const MovieDetalis: React.FC<MovieDetalisProps> = (props) => {
  console.log(props.match.params.id)
  return(
    <div>
      <h2>MovieDetalis</h2>
    </div>
  )
}

export default MovieDetalis