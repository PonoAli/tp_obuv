import React from 'react'
import { useSelector } from 'react-redux'

import '../scss/components/cartModal.scss'
import remove from '../img/btn-remove.svg'
import { CartItems } from '../components/CartItems.tsx'
import { CartEmpty } from '../components/CartEmpty.tsx'
import { RootState } from '../redux/store'

type CartProps = {
  onClose: () => void
}

export const Cart: React.FC<CartProps> = ({onClose}) => {
  const {totalPrice, items} = useSelector((state: RootState) => state.cart)

  return (
    <div className='cart_overlay'>
      <div className='container'>
        <div className='cart_drawer'>
          <div className='cart_content'>
            <div className='cart_header'>
              Корзина
              <img className='cart_header_remove' onClick={onClose} src={remove} alt='remove' />
            </div>
              {
                !totalPrice ?
                <CartEmpty /> :
                <>
                <div className='cart_container'>
                  {items.map(item => <CartItems key={item.id} {...item} />)}
                </div>
                <div className='cart_footer'>
                  <div className='cart_itog'>
                    <div className='cart_item_title'>Итого:</div>
                    <div className='cart_item_price'>{totalPrice} ₽</div>
                  </div>
                  <button className='cart_footer_button'>Оформить заказ</button>
                </div>
                </>
              }
          </div>
        </div>
      </div>
    </div>
  )
}

