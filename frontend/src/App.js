import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './components/Product'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
 

function App() {
  return (
    <div>
      <Navbar />
      <Product />
      <Footer />
    </div>
  )
}

export default App;
