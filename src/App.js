import React from "react";
import { Header } from "./components/Header";
import './scss/app.scss'

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";


function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App;
