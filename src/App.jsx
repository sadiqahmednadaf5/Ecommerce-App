
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ProductList from './pages/ProductList/ProductList';
import Cart from "./pages/Cart/Cart";
import CheackOut from "./pages/CheackOut/CheackOut"


function App() {
  const [cart, setCart] = useState([]);





  return (
    <>
      <Router>
        <Header cart={cart} setCart={setCart} />
        <Routes>
          <Route path='/' element={<ProductList cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='/cart/cheackout' element={<CheackOut />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
