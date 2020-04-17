import React, { useState } from 'react'
import { ModalFilterProps } from '../script/types'

const ModalFilter: React.FC<ModalFilterProps> = (props) => {
  const [isOpen, setOpen] = useState(false)
  const [type, setType] = useState('all')
  const [year, setYear] = useState('')

  const yearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regexp = /\d/g
    const value = e.target.value

    if (value.match(regexp) !== null) {
      setYear(value.match(regexp).join(''))
    } else {
      setYear('')
    }
  }

  const successBtnClick = () => {
    props.setType(type)
    props.setYear(year)
    setOpen(false)
  }

  return (
    <React.Fragment>
      <button className="btn btn-secondary" onClick = {() => setOpen(true)}>Фильтр</button>
      {isOpen && (
        <div className="modal-filter">
          <div className="modal-filter-body">
            <div className="title">
              <h2>Фильтр</h2>
            </div>
            <div className="year-input-wrapper">
              <span>Введите дату выхода фильма: </span>
              <div className="type-input">
                <input type="text" placeholder = "2014" onChange = {(e) => yearChange(e)} value = {year}/>
              </div>
            </div>
            <div className="type-selector-wrapper">
              <span>Выбирите тип запроса: </span>
              <select name="type" onChange = {(e) => setType(e.target.value)}>
                <option value="all">Все</option>
                <option value="movie">Фильм</option>
                <option value="series">Сериал</option>
              </select>
            </div>
            <div className="btn-wrapper">
              <button className = 'btn btn-success' onClick = {successBtnClick}>Принять</button>
              <button className = 'btn btn-danger' onClick = {() => setOpen(false)}>Отклонить</button>
            </div>
          </div>
      </div>
      )}
    </React.Fragment>
  )
}

export default ModalFilter