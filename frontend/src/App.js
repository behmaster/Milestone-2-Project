import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './components/Product'
import Rating from './components/Rating'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
 

function App() {
  return (
    <div>
      <Navbar />
      <Product />
      <Footer />
      <Rating />
    </div>
  )
}

export default App;