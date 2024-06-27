import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";
const AddProduct = () => {
  const [validated, setValidated] = useState(false);
   const [addProducts,setaddProducts]=useState(
    {
      Product:'',
    Category:'',
    Photo:'',
    Price:'',
   
    });

  const handleSubmit = (event) => {
    
    event.preventDefault();

    
    const form = event.currentTarget;
   
  
   
    
    if (form.checkValidity() === false) {
      console.log("formsubmittd");
            event.stopPropagation();
            setValidated(true);
    }else  {
       console.log("form submitted",form);
       console.log("form submitted",addProducts);
      setValidated(true);
    }
    
    
  };

     const productform = (event)=> {
      const {name,value}= event.target; 

     if(name === 'Photo'){
      const photo = event.target.files[0];
      setaddProducts ({...addProducts,[name]:photo})
      //console.log(photo);
     }else {

   setaddProducts ({...addProducts,[name]:value})
  }
}



  return (
    <Container>
         
            <Row className='justify-content-center'>
            <Col md={6}>
            <h5 className=' ms-5 pt-4 '>ADD PRODUCT</h5>
            </Col>
          </Row>
      <Row className='justify-content-center  ' >
        <Col md={6}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group  controlId="validationCustom01" className='position-relative '>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product Name"
            name = 'Product'
            onChange={productform}
          />
          <Form.Control.Feedback type="invalid" tooltip>Please Enter Product Name</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group  controlId="validationCustom02" className='position-relative pt-2 pb-1'>
          <Form.Label>Category:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product Catrgory"
            name = 'Category'
            onChange={productform}
          />
          <Form.Control.Feedback type="invalid" tooltip>Please Enter Catgory Name</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
          <Form.Group  controlId="validationCustom01" className='position-relative pt-3' >
          <Form.Label>Product Photo</Form.Label>
          <Form.Control
           required
            type="file"
            name = 'Photo'
            onChange={productform}
          />
          <Form.Control.Feedback type="invalid" tooltip>Please Add Product Photo</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group  controlId="validationCustomUsername" className='position-relative pt-4'>
          <Form.Label>Price:</Form.Label>
            <Form.Control
              type="Number"
              placeholder="Price"
              required
              name = 'Price'
              onChange={productform}
            />
            <Form.Control.Feedback type="invalid" tooltip>
              Please choose a Product Price
            </Form.Control.Feedback>
             </Form.Group>
        <Row className='justify-content-center pt-3 ' >
          <Button type="submit" className='mb-5 w-25 mt-3'> ADD </Button>
          </Row>
          </Row>
          </Form>
          </Col>
      </Row>
      
    </Container>
  )
}

export default AddProduct  

