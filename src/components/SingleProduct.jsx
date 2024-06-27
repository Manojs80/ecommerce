import React from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddProduct from '../admin/AddProduct';

 const SingleProduct = ({products}) => {
  
   console.log("f", products);

  return (
  
  
    <Col md={4} className = "mb-3">
    <Card>
   <Card.Img variant="top" src={products.image} />
   <Card.Body>
   <Card.Title>{products.name}</Card.Title>
 <Card.Text>
 {products.price} <br/>
 {products.description}
    </Card.Text>
<Button variant="primary" as={Link} to={`/${products.id}`}>More Info </Button>
</Card.Body>
</Card>
</Col>
  
  )
}

export default SingleProduct