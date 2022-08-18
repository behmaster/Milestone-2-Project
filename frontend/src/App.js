import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './views/Product'
import Rating from './components/Rating'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
 

const App = () => {
  return (
    <>
      <Header />
      {/* bootstrap padding y axis 3 */}
      <main className='py-3'>
        <Container>
         <HomeScreen />  
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
