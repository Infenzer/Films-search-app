import React, { useState, KeyboardEvent } from 'react'
import {SearchProps} from '../../script/mainPageTypes'
import ModalFilter from './ModalFilter'

const Search: React.FC<SearchProps> = (props) => {
  const {value, setType , setYear, setValue} = props
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.search()
    }
  }

  return (
    <div className="search" onKeyPress = {handleKeyPress}>
      <input 
        className="form-control" 
        type="text" 
        onChange = {(e) => setValue(e.target.value)} 
        value = {value}
        placeholder = 'Man'
      />
      <button className="btn btn-primary" onClick = {() => props.search()}>Найти</button>
      <ModalFilter setType = {setType} setYear = {setYear}/>
    </div>
  )
}

export default Search
