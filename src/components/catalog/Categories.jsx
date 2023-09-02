import React, { useState } from 'react'
import '../../scss/components/sort.module.scss'

export const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [ 35, 36, 37, 38, 39, 40, 41, 42, 43];

  const onClickCategory = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className='table_size'>
      <p>Размер</p>
      <ul>
        {categories.map((value, index) => (
          <li key={index} onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ''}>{value}</li>
        ))}
      </ul>
    </div>
  )
}
