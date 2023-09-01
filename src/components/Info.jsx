import React from 'react'
import art from '../img/Mask Group.png'
import '../scss/components/info.scss'

export const Info = () => {
  return (
    <div className='wrap_info'>
      <div className='container'>
          <div className='info'>
            <div className='info_text'>
              <h1>Пара слов о нас</h1>
              <p>Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. </p>
              <h2>― SneakMax</h2>
            </div>
            <div className='info_image'>
              <img src={art} alt="pict" />
            </div>
          </div>
      </div>
    </div>
  )
}
