import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

import './scss/app.scss'


function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App;
