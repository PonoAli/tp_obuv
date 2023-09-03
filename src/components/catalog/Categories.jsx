import React from 'react'
import '../../scss/components/sort.scss'

export const Categories = ({value, onChangeCategory}) => {

  const categories = [ , 35, 36, 37, 38, 39, 40, 41, 42, 43];

  return (
    <div className='table_size'>
      <p>Размер</p>
      <ul>
        {categories.map((categoryName, index) => (
          <li key={index} onClick={() => onChangeCategory(index)} className={value === index ? "active" : ''}>{categoryName}</li>
        ))}
      </ul>
    </div>
  )
}
