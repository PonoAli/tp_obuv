import React, { useState } from 'react'
import { Info } from "../components/Info";
import { Contaсt } from "../components/Contaсt";
import { Footer } from "../components/Footer";
import { Catalog } from '../components/catalog/Catalog';
import { BlockStart } from '../components/BlockStart';
import { Cart } from './Cart';
import { Header } from '../components/Header';

export const Home = () => {
  const [cartOpened, setCartOpened] = useState(false)

  return (
    <div>
      <Header onClickCart={() => setCartOpened(true)} />
      {cartOpened && <Cart onClose={() => setCartOpened(false)} />}
      < BlockStart />
      <div className="container">
        <Catalog />
      </div>
      <Info />
      <Contaсt />
      <Footer />
    </div>
  )
}
