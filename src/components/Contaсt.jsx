import React from 'react'
import '../scss/components/contact.scss'
import vk from '../img/VK.svg'
import inst from '../img/Instagram.svg'

export const Contaсt = () => {
  return (
    <div className='container'>
      <div className='contact'>
        <div>
          <div className='contact_block'>
            <h1>Контакты</h1>
            <h2>Главный офис</h2>
            <h3>+7 800 789 89 89</h3>
            <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
            <h2>Отдел продаж</h2>
            <h3>+7 800 789 89 89</h3>
            <p>г. Санкт-Петербург, Комсомольская, 43 к1</p>
          </div>
          <div>
            <img src={vk} alt='vk' />
            <img src={inst} alt='instagram' />
          </div>
        </div>
        <div className='form'>
          <h1>Есть вопросы?</h1>
          <p>Заполните форму и наш менеджер свяжется с вами</p>
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Номер телефона" />
          <button className='form_button'>Отправить</button>
        </div>
      </div>
    </div>
  )
}
