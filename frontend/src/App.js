import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './views/HomeScreen'
 

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
