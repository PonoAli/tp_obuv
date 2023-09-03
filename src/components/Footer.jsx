import React from 'react'
import '../scss/components/footer.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer_wrap'>
      <div className='container'>
        <div className='footer_block'>
          <div className='footer_container'>
            <Link>
              <div className='footer_logo'>SneakMax</div>
            </Link>
            <div className='footer_menu'>
              <AnchorLink href='#catalog'><li>Каталог</li></AnchorLink>
              <AnchorLink href='#info'><li>О нас</li></AnchorLink>
              <AnchorLink href='#contact'><li>Контакты</li></AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
