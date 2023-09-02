import React, {useState, useEffect} from 'react'
import { Sort } from './Sort'
import { SneakBlock } from '../SneakBlock/SneakBlock'
import { Skeleton } from "../SneakBlock/Skeleton";
import '../../scss/components/catalog.scss'
import '../../components/SneakBlock/SneakBlock.scss'

export const Catalog = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://64d09517ff953154bb791d42.mockapi.io/item').then((res) => {
      return res.json();
    }).then((arr) => {
      setItems(arr);
      setIsLoading(false)
    })
  }, [])

  return (
      <div className='catalog'>
        <div className='catalog_sort'>
          <Sort />
        </div>
        <div className='sneakblock'>
        {
            isLoading ?
            [... new Array(9)].map((_, index) => <Skeleton key={index}/>)
            : items.map((obj) => 
            <SneakBlock 
            key={obj.id}
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            types={obj.types}
            />
          )}
          <button className="sneakblock_button">Показать ещё</button>
        </div>
      </div>
  )
}
