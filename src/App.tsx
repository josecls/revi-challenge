import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Selection from './pages/Selection'
import Battle from './pages/Battle'

function App()  {
 return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selection" element={<Selection />} />
      <Route path="/battle" element={<Battle />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App
