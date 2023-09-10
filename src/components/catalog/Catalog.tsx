import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SneakBlock } from '../SneakBlock/SneakBlock'
import { Skeleton } from "../SneakBlock/Skeleton";
import '../../scss/components/catalog.scss'
import '../../components/SneakBlock/SneakBlock.scss'
import '../../scss/components/sort.scss'
import { Categories } from './Categories';
import { setCategoryId, setFilters } from '../../redux/slice/filterSlice';
import { RootState } from '../../redux/store';

export const Catalog: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(true);
  const isMounted = useRef(false);

  const {categoryId} = useSelector((state: RootState) => state.filter);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id: any) => {
    dispatch (setCategoryId(id))
  }


 const fetchSneakers = async () => {
  setIsLoading(true)
  const category = categoryId>0 ? `category=${categoryId}` : '';

  try{
    const res = await 
    axios.get(`https://64d09517ff953154bb791d42.mockapi.io/item?${category}`)
      setItems(res.data);
      setIsLoading(false)
  } catch (error) {
    setIsLoading(false);
    console.log('Ошибка при загрузке каталога')
  }
  }

  useEffect(() => {
    fetchSneakers()
  }, [categoryId])

  return (
      <div className='catalog'>
        <div className='catalog_sort'>
        <h1 id='catalog' className='sort_h1'>Каталог</h1>
          <div className='sort_container'>
            <div className='sort'>
              <h3>Подбор по параметрам</h3>
              <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
              <button onClick={() => {onChangeCategory([])}} className='sort_button'>Сбросить</button>
            </div>
          </div>
        </div>
        <div className='sneakblock'>
            {
              isLoading ?
              [... new Array(3)].map((_, index) => <Skeleton key={index}/>)
              : items.map((obj: any) => 
              <SneakBlock 
              key={obj.id} {...obj}
              />
            )}
        </div>
      </div>
  )
}
