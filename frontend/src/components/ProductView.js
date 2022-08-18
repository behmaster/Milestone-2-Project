import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import samplePhoto from '../assets/sample.webp'
import Product from './ProductGrid';


const ProductView = () => {
  return (
    <Container>
        <Row>
        <Col sm={8}>
        <img src={samplePhoto} alt="Sample Photo" />
        <img
       src="https://media.istockphoto.com/photos/nerd-glasses-with-clipping-paths-picture-id125416806?k=20&m=125416806&s=612x612&w=0&h=5debF0r2pbWcHHxNl9EOZwQ5O52JlKUIpy2pW0t8rfA="
       alt="glasses"
       width="500"
       height="600"
     ></img>
        </Col>
        <Col sm={4}>
            {Product.title}
            {Product.rating}
            {Product.price}
            {Product.colors}
            <Button>Add To Cart</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductView