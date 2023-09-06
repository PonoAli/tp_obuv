import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/slice/cartSlice.ts'

import '../scss/components/cartModal.scss'
import clear from '../img/trash 1.svg'

type CartItemProps = {
  id: number, imageUrl: string, title: string, price: number
}

export const CartItems: React.FC<CartItemProps> = ({id, imageUrl, title, price}) => {
  const dispatch = useDispatch()
  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
      dispatch(removeItem(id))
    }
  }
  return (
    <div className='cart_item'>
      <img className='cart_item_img' src={imageUrl} alt='obuv' />
      <div className='cart_item_text'>
        <div className='cart_item_title'>{title}</div>
        <div className='cart_item_price'>{price} ₽</div>
      </div>
      <img onClick={onClickRemove} className='cart_clear' src={clear} alt='clear' />
    </div>
  )
}
