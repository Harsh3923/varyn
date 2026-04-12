import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import DormRoom from './components/DormRoom'

export default function App() {
  const [cart, setCart] = useState([])

  function addToCart(product, size, color) {
    setCart(prev => [...prev, { ...product, selectedSize: size, selectedColor: color }])
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Navigate to="/rooms/dorm" replace />} />
        <Route
          path="/rooms/dorm"
          element={<DormRoom addToCart={addToCart} />}
        />
      </Routes>
    </BrowserRouter>
  )
}
