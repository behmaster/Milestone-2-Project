import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './views/HomeScreen'
import Rating from './components/Rating'
import ProductView from './components/ProductView'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
 

const App = () => {
  return (
    <>
      <Header />
      {/* bootstrap padding y axis 3 */}
      <main className='py-3'>
        <Container>
         <ProductView />  
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
