import React from 'react'
import '../../scss/components/sort.scss'

export const Sort = ({value, onChangeSort}) => {
  const types = ['мужской', 'женский']

  return (
    <div>
      <p>Пол</p>
        <div className='sort_box'>
          <ul>
            {types.map((typeName, index) => (
              <li
              key={index} 
              onClick={() => onChangeSort(index)} 
              className={value === index ? "active" : ''}>
                {typeName}
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}
