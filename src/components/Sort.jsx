import React from 'react'
import style from '../scss/components/sort.module.scss'

export const Sort = () => {
  return (
    <div className={style.sort_container}>
      <div className={style.sort}>
        <h3>Подбор по параметрам</h3>
        <div>
          <p>Пол</p>
            <div className={style.sort_box}>
              <label className={style.checkbox_other}>
                <input type="checkbox" />
                <span>мужской</span>
              </label>
              <label className={style.checkbox_other}>
                <input type="checkbox" />
                <span>женский</span>
              </label>
            </div>
        </div>
        <div className="table_size">
          <p>Размер</p>
          <ul>
            <li>35</li>
            <li>36</li>
            <li>37</li>
          </ul>
          <ul>
            <li>38</li>
            <li>39</li>
            <li>40</li>
          </ul>
          <ul>
            <li>41</li>
            <li>42</li>
            <li>43</li>
          </ul>
        </div>
        <button className={style.sort_button}>Применить</button>
        <button className={style.sort_button}>Сбросить</button>
      </div>
    </div>
  )
}
