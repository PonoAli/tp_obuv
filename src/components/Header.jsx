import React from 'react'
import cart from '../img/cart.svg'
import '../scss/components/header.scss'

export const Header = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='header'>
          <div className='conteiner_header'>
            <div className='header_logo'>SneakMax</div>
            <div className='header_menu'>
              <ul className='header_menu_list'>
                <li className='header_menu_item'>
                  <a href="/">Каталог</a>
                </li>
                <li className='header_menu_item'>
                  <a href="/">О нас</a>
                </li>
                <li className='header_menu_item'>
                  <a href="/">Контакты</a>
                </li>
              </ul>
              <a href="/Cart.html" className='header_cart' data-target='#login' data-toggle='modal'>
                <img src={cart} alt="cart"/>
                <i>0</i>
              </a>
            </div>
          </div>
        </div>
        <hr />
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
    </div>

  )
}
