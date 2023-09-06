import React, { useState } from 'react'
import { Info } from "../components/Info.tsx";
import { Contaсt } from "../components/Contaсt.tsx";
import { Footer } from "../components/Footer.tsx";
import { Catalog } from '../components/catalog/Catalog.tsx';
import { BlockStart } from '../components/BlockStart.tsx';
import { Cart } from './Cart.tsx';
import { Header } from '../components/Header.tsx';

export const Home: React.FC = () => {
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
