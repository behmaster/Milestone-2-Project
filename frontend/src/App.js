import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Rating from './components/Rating'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import { useParams } from "react-router-dom";


import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
 

const App = () => {
   return (
    <Router>
      <Header />
      <HomeScreen />
      {/* bootstrap padding y axis 3 */}
      <main className='py-3'>
        <Container>
          <Routes>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/inventory/:id' component={ProductScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
