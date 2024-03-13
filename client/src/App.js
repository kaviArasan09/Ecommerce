import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/shop.js';

import Product from './pages/product.js';
import Cart from './pages/cart.js';
import Mens from './pages/mens.js'
import LoginSignup from './pages/loginSignup.js';
import Women from './pages/women.js';
import Kids from './pages/kids.js';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<Mens/>} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/product' element={<Product />}>
          <Route path=':ProductId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
