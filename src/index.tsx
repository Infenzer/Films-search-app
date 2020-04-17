import React from 'react'
import { render } from 'react-dom'
import MainPage from './components/MainPage/MainPage'
import './scss/style.scss'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.querySelector('#app'))