import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Developer from '../components/Developer'
import developers from '../developers'

 

const HomeScreen = () => {
  return (
    <>
      <h1>Your Developers</h1>
      <Row>
        {developers.map((developer) => (
          // number of columns per screen
          <Col sm={12} md={6} lg={4} xl={3}>
            <Developer developer={developer}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
