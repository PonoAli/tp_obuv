import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import qs from 'qs'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SneakBlock } from '../SneakBlock/SneakBlock'
import { Skeleton } from "../SneakBlock/Skeleton";
import '../../scss/components/catalog.scss'
import '../../components/SneakBlock/SneakBlock.scss'
import '../../scss/components/sort.scss'
import { Categories } from './Categories';
import { setCategoryId, setFilters } from '../../redux/slice/filterSlice';

export const Catalog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(true);
  const isMounted = useRef(false);

  const {categoryId} = useSelector((state) => state.filter);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch (setCategoryId(id))
  }

 const fetchSneakers = () => {
    setIsLoading(true)
    axios.get(`https://64d09517ff953154bb791d42.mockapi.io/item?${categoryId>0 ? `category=${categoryId}` : ''}`).then(res => {
      setItems(res.data);
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId
      });
      navigate(`?${queryString}`)
    }
    isMounted.current=true;
  }, [categoryId]);

  useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      dispatch(
        setFilters({
          ...params
        })
      )
      // isSearch.current=true
    }
  })

  useEffect(() => {
    if (!isSearch.current) {
      fetchSneakers();
    }
    isSearch.current = false;
  }, [categoryId])

  return (
      <div className='catalog'>
        <div className='catalog_sort'>
        <h1 id='catalog' className='sort_h1'>Каталог</h1>
          <div className='sort_container'>
            <div className='sort'>
              <h3>Подбор по параметрам</h3>
              {/* <Sort value={sortType} onChangeSort={(id) => setSortType(id)} /> */}
              <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
              {/* <button className='sort_button'>Применить</button> */}
              <button className='sort_button'>Сбросить</button>
            </div>
          </div>
        </div>
        <div className='sneakblock'>
            {
              isLoading ?
              [... new Array(3)].map((_, index) => <Skeleton key={index}/>)
              : items.map((obj) => 
              <SneakBlock 
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              types={obj.types}
              />
            )}
          {/* <button className="sneakblock_button">Показать ещё</button> */}
        </div>
      </div>
  )
}
