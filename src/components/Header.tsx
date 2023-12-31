import React from 'react'
import { useSelector } from 'react-redux';
import cart from '../img/cart.svg'
import '../scss/components/header.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';

type HeaderProps = {
  onClickCart: () => void;
}


export const Header: React.FC<HeaderProps> = ({onClickCart}) => {

  const {items} = useSelector((state:RootState) => state.cart);
  const totalCount = items.reduce((sum: number, item) => sum + item.count, 0)

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
            <div onClick={onClickCart} className='header_cart' >
              <img src={cart} alt="cart"/>
              <i>{totalCount} </i>
            </div>
          </div>
        </div>
      </div>
        <hr />
    </div>
  )
}
