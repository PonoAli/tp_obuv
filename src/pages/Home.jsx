import React from 'react'
import { Info } from "../components/Info";
import { Contaсt } from "../components/Contaсt";
import { Footer } from "../components/Footer";
import { Catalog } from '../components/catalog/Catalog';
import { BlockStart } from '../components/BlockStart';

export const Home = () => {
  return (
    <div>
      <BlockStart />
      <div className="container">
        <Catalog />
      </div>
      <Info />
      <Contaсt />
      <Footer />
    </div>
  )
}
