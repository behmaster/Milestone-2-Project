import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import samplePhoto from '../assets/sample.webp'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product.product_id}`}>
        <Card.Img src={samplePhoto} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product.product_id}`}>
          <Card.Title as='div'>
            <strong>{product.model}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product