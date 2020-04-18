import React from 'react'
import {MovieCardProps} from '../../script/movieDetalisTypes'

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const info = props.info

  return (
    <div className="container-lg movie-card-body">
      <div className="poster-wrapper">
        <div className="poster">
          <img src={info.Poster} alt=""/>
        </div>
        <div className="raitings">
          <ul>
            <li>{info.Ratings[2].Source}: {info.Ratings[2].Value} </li>
            <li>{info.Ratings[1].Source}: {info.Ratings[1].Value}  </li>
          </ul>
        </div>
      </div>
      <div className="info-wrapper">
        <div  className = 'head'>
          <h2> {info.Title} ({info.Year}) </h2>
          <div className='head-info'>
            <span className='certification'> {info.Rated} </span>
            <span className='released'> {info.Released} </span>
            <i className="fas fa-circle"></i>
            <span className='genres'> {info.Genre} </span>
            <i className="fas fa-circle"></i>
            <span className='runtime'> {info.Runtime} </span>
          </div>
        </div>
        <div className="plot">
          <h5>Overview: </h5>
          <p> {info.Plot} </p>
        </div>
        <div className="people">
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'> Director: {info.Director} </li>
            <li className='list-group-item'> Writers: {info.Writer} </li>
            <li className='list-group-item'> Actors: {info.Actors} </li>
          </ul>
        </div>
        <div className="facts">
          <h5>Facts: </h5>
          <ul className='list-group'>
            <li className='list-group-item'> Awards: {info.Awards} </li>
            <li className='list-group-item'> Box Office: {info.BoxOffice} </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieCard