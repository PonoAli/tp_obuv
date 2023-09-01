import React from "react";
import { Header } from "./components/Header";
import './scss/app.scss'

import { Sort } from "./components/Sort";
import { SneakBlock } from "./components/SneakBlock/SneakBlock";
import { Info } from "./components/Info";
import { Contaсt } from "./components/Contaсt";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div >
      <Header />
      <div className="container">
        <h1 className="sort_h1">Каталог</h1>
        <div className="catalog">
          <Sort />
          <SneakBlock />
        </div>
      </div>
      <Info />
      <Contaсt />
      <Footer />
    </div>
  )
}

export default App;
