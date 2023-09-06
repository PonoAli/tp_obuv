import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slice/cartSlice'
import obuv from '../assets/img/obuv.jpg'

import './SneakBlock.scss'
import addcart from '../../img/addcart.png'
import { RootState } from '../../redux/store'

type SneakBlockProps = {
  id: number, title: string, price: number, imageUrl: string, count: number
}

export const SneakBlock: React.FC<SneakBlockProps> = ({id, title, price, imageUrl, count}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => state.cart.items.find((obj) => obj.id === id))

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id, title, price, imageUrl, count
    }
    dispatch(addItem(item))
  }

  return (
    <div className='sneakblock_item'>
      <img className='sneakblock_img' src={imageUrl} alt='sneak' />
        <div className='sneakblock_item_block'>
          <div className='sneakblock_item_block_text'>
            <div className='sneakblock_title'>{title}</div>
            <div className='sneakblock_price'>{price} ₽ </div>
          </div>
            <button onClick={onClickAdd} className='sneakblock_button_addcart'>
              <img className='sneakblock_img_addcart'  src={addcart} alt="Добавить"/>
              {addedCount>0 && <i>{addedCount}</i>}
            </button>
        </div>
    </div>
  )
}
