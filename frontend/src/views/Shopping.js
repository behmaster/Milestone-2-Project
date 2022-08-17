import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './components/ProductGrid'
import Rating from './components/Rating'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
 

function App() {
  return (
    <div>
      <Navbar />
      <ProductGrid />
      <Footer />
      <Rating />
    </div>
  )
}

export default App;