import React from 'react'
import '../scss/components/footer.scss'

export const Footer = () => {
  return (
    <div className='footer_wrap'>
      <div className='container'>
        <div className='footer_block'>
          <div className='footer_container'>
            <div className='footer_logo'>SneakMax</div>
            <div className='footer_menu'>
              <ul className='footer_menu_list'>
                <li className='footer_menu_item'>
                  <a href="/">Каталог</a>
                </li>
                <li className='header_menu_item'>
                  <a href="/">О нас</a>
                </li>
                <li className='header_menu_item'>
                  <a href="/">Контакты</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
