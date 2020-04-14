import React, { useState, KeyboardEvent } from 'react'
import {SearchProps} from '../script/types'

const Search: React.FC<SearchProps> = (props) => {
  const [value, setValue] = useState('')

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.search(value)
    }
  }

  return (
    <div className="search" onKeyPress = {handleKeyPress}>
      <input type="text" onChange = {(e) => setValue(e.target.value)} value = {value}/>
      <button onClick = {() => props.search(value)}>Найти</button>
    </div>
  )
}

export default Search
