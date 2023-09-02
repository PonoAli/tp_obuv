import React, { useState } from 'react'
import style from '../../scss/components/sort.module.scss'
import { Categories } from './Categories'

export const Sort = () => {
  const [selected, setSelected] = useState(0);
  const list=['мужской', 'женский'];
  const sortName = list[selected];

  const onClickListItem = (index) => {
    setSelected(index);
  }

  return (
    <div>
      <h1 id='catalog' className={style.sort_h1}>Каталог</h1>
        <div className={style.sort_container}>
          <div className={style.sort}>
            <h3>Подбор по параметрам</h3>
            <div>
              <p>Пол</p>
                <div className={style.sort_box}>
                  <label className={style.checkbox_other}>
                    {list.map((name, index) => (
                      <input type="checkbox" key={index} onClick={() => onClickListItem(index)} className={selected === index ? "active" : ''} />
                    ))}
                    <input type="checkbox" />
                    <span>{sortName}</span>
                  </label>
                  <label className={style.checkbox_other}>
                    <input type="checkbox" />
                    <span>женский</span>
                  </label>
                </div>
            </div>
            <Categories />
            <button className={style.sort_button}>Применить</button>
            <button className={style.sort_button}>Сбросить</button>
          </div>
        </div>
    </div>
  )
}
