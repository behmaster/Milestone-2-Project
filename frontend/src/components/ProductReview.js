import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import samplePhoto from '../assets/sample.webp'


const ProductReview = props => {
    return (
        <div>
            <Card>
                <Row>
                    {/* <Col>
                    <h1>{reviews.title}</h1>
                    {reviews.rating_result}
                    <h2>{reviews.author}</h2>
                    </Col>
                    <Col>
                    {reviews.comment}
                    </Col> */}
                </Row>
            </Card>
        </div>
    );
};

ProductReview.propTypes = {
    
};

export default ProductReview;