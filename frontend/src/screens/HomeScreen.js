import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Developer from '../components/Developer'
import developers from '../developers'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Product from '../components/Product'

import { listProducts } from '../actions/productActions'


const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const{ loading, error, products} = productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
// const products = []

  return (
    <>
      <h1>Your Developer</h1>
      <Row>
      {products.map((product) => (
            <Col key={product.product_id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
      </Row>
      <Row>
        {developers.map((developer) => (
          // number of columns per screen
          <Col key ={developer._id} sm={12} md={6} lg={4} xl={3}>
            <Developer developer={developer}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
