import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductView from '../components/ProductView'
import ProductInfo from '../components/ProductInfo'
import ProductReview from '../components/ProductReview'
import 'bootstrap/dist/css/bootstrap.css'
 
function Product() {
    return (
      <div>
        <Header />
        <ProductView />
        <ProductInfo />
        <ProductReview />
        <Footer />
      </div>
    )
  }
  
  export default Product;