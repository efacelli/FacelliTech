import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Catalog from './pages/Catalog.jsx'
import Product from './pages/Product.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/producto/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
