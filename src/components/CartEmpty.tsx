import React from 'react'
import corb from '../img/empty-cart.jpg'

export const CartEmpty: React.FC = () => {
  return (
    <div className='cartEmpty'>
      <img className='cartEmpty_img' src={corb} alt='corb' />
      <h2>Пусто <span>😔</span></h2>
      <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
    </div>
  )
}
