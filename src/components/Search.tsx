import React, { useState, KeyboardEvent } from 'react'
import {SearchProps} from '../script/types'
import ModalFilter from './ModalFilter'

const Search: React.FC<SearchProps> = (props) => {
  const [value, setValue] = useState(``)
  const [type, setType] = useState('all')
  const [year, setYear] = useState('')

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.search(value, type, year)
    }
  }

  return (
    <div className="search" onKeyPress = {handleKeyPress}>
      <input type="text" onChange = {(e) => setValue(e.target.value)} value = {value}/>
      <button className="btn btn-primary" onClick = {() => props.search(value, type, year)}>Найти</button>
      <ModalFilter setType = {setType} setYear = {setYear}/>
    </div>
  )
}

export default Search
