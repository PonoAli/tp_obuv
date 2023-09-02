import React from 'react'
import '../scss/components/header.scss'

export const BlockStart = () => {
  return (
    <div className='wrapper'>
      <div className="container">
        <div className="block_start">
          <div className="block_title">
            <h1> Кроссовки известных брендов с доставкой по России и СНГ</h1>
            <p>Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким ценам</p>
          </div>
          <button>Перейти к покупкам</button>
        </div>
      </div>
    </div>
  )
}
