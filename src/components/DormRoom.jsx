import { useState } from 'react'
import Hotspot from './Hotspot'
import ProductModal from './ProductModal'
import { products } from '../data/products'
import './DormRoom.css'

export default function DormRoom({ addToCart }) {
  const [activeProduct, setActiveProduct] = useState(null)
  const [viewportStyle, setViewportStyle] = useState({ width: '100vw', height: '100vh' })

  function handleImageLoad(e) {
    const { naturalWidth, naturalHeight } = e.target
    const ratio = naturalWidth / naturalHeight
    const vw = window.innerWidth
    const vh = window.innerHeight

    let width, height
    if (vw / vh > ratio) {
      // Screen wider than image — fit by width, overflow vertically (cropped by shell)
      width = vw
      height = vw / ratio
    } else {
      // Screen taller than image — fit by height, overflow horizontally (cropped by shell)
      height = vh
      width = vh * ratio
    }

    setViewportStyle({ width: `${width}px`, height: `${height}px` })
  }

  return (
    <div className="room-shell">
      <div className="room-viewport" style={viewportStyle}>
        <img
          className="room-bg"
          src="/room.png"
          alt="Varyn dorm room"
          draggable={false}
          onLoad={handleImageLoad}
        />

        {products.map(product => (
          <Hotspot
            key={product.id}
            product={product}
            onClick={() => setActiveProduct(product)}
          />
        ))}

        <div className="explore-label">
          <span className="explore-arrow">↓</span>
          <span className="explore-text">EXPLORE</span>
        </div>
      </div>

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onAddToCart={(product, size, color) => {
            addToCart(product, size, color)
            setActiveProduct(null)
          }}
        />
      )}
    </div>
  )
}
