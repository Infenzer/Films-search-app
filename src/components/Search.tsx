import React, { useState, KeyboardEvent } from 'react'
import {SearchProps} from '../script/types'
import ModalFilter from './ModalFilter'

const Search: React.FC<SearchProps> = (props) => {
  const [value, setValue] = useState(``)
  const [type, setType] = useState('movie')
  const [year, setYear] = useState('2014')

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.search(result(value,type,year))
    }
  }

  const result = (value, type, year) => {
    console.log(value,type,year)
    return `https://www.omdbapi.com/?s=${value}&y=${year}&type=${type}&apikey=4a3b711b`
  }

  const filter = (type: string, year: string) => {
    console.log(type, year)
  }

  return (
    <div className="search" onKeyPress = {handleKeyPress}>
      <input type="text" onChange = {(e) => setValue(e.target.value)} value = {value}/>
      <button className="btn btn-primary" onClick = {() => props.search(result(value,type,year))}>Найти</button>
      <ModalFilter setType = {setType} setYear = {setYear}/>
    </div>
  )
}

export default Search
