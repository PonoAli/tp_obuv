import React, { useState } from 'react'
import './SneakBlock.scss'
import addcart from '../../img/addcart.png'

export const SneakBlock = ({title, price, imageUrl}) => {

  const [itemCount, setItemCount] = useState(0);

  const onClickAddButton=() => {
    setItemCount(itemCount+1)
  }
  return (
    <div className='sneakblock_item'>
      <img className='sneakblock_img' src={imageUrl} alt='sneak' />
        <div className='sneakblock_item_block'>
          <div className='sneakblock_item_block_text'>
            <div className='sneakblock_title'>{title}</div>
            <div className='sneakblock_price'>{price} ₽ </div>
          </div>
            <button onClick={onClickAddButton} className='sneakblock_button_addcart'>
              <img className='sneakblock_img_addcart'  src={addcart} alt="Добавить"/>
              <i>{itemCount}</i>
            </button>
        </div>
    </div>
  )
}
