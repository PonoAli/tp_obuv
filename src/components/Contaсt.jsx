import React, { useState, useEffect } from 'react'
import '../scss/components/contact.scss'
import vk from '../img/VK.svg'
import inst from '../img/Instagram.svg'

export const Contaсt = () => {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [telephoneDirty, setTelephneDirty] = useState(false);
  const [errorName, setErrorName] = useState('*Обязательно для заполнения');
  const [errorTele, setErrorTele] = useState('*Обязательно для заполнения');
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (errorName || errorTele) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [errorName, errorTele])

  const telephoneHandler = (e) => {
    setTelephone(e.target.value)
    setErrorTele('')
  }

  const userNameHandler = (e) => {
    setName(e.target.value)
    setErrorName('')
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'userName': 
        setNameDirty(true)
        break
      case 'telephone':
        setTelephneDirty(true)
        break
    }
  }

  return (
    <div id='contact' className='container'>
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
        <form className='form'>
          <h1>Есть вопросы?</h1>
          <p>Заполните форму и наш менеджер свяжется с вами</p>
          {(nameDirty && errorName) && <div className='form_error'>{errorName}</div>}
          <input value={name} onChange={e => userNameHandler(e)} onBlur={e => blurHandler(e)} name='userName' type="text" placeholder="Ваше имя" />
          {(telephoneDirty && errorTele) && <div className='form_error'>{errorTele}</div>}
          <input value={telephone} onChange={e => telephoneHandler(e)} onBlur={e => blurHandler(e)} name='telephone' type="text" placeholder="Номер телефона" />
          <button disabled={!formValid} className='form_button'>Отправить</button>
        </form>
      </div>
    </div>
  )
}
