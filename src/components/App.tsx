import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import MovieDetalis from './MovieDetalis/MovieDetalis'

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path = '/movie/:id' component = {MovieDetalis}/>
        <Route exact path = '/' component = {MainPage}/>
      </Switch>
    </div>
  )
}

export default App