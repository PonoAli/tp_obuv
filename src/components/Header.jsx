import React from 'react'
import cart from '../img/cart.svg'
import '../scss/components/header.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='header'>
          <Link to='/'>
            <div className='header_logo'>SneakMax</div>
          </Link>
          <div className='header_menu'>
            <AnchorLink href='#catalog'><li>Каталог</li></AnchorLink>
            <AnchorLink href='#info'><li>О нас</li></AnchorLink>
            <AnchorLink href='#contact'><li>Контакты</li></AnchorLink>
            <Link to='/Cart' className='header_cart' >
              <img src={cart} alt="cart"/>
              <i>0</i>
            </Link>
          </div>
        </div>
      </div>
        <hr />
    </div>
  )
}
