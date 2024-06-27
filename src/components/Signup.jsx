import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import {Container} from "react-bootstrap";

const Signup = () => {

    const { Formik } = formik;

  const schema = yup.object().shape({
    fullname: yup.string().required("Please enter Fullname").min(5,"fullname should be contain 5 characters"),
   email: yup.string().required().email(),
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Password should contain alphabet(L&U),number and 8 characters "),
   confirmpassword: yup.string().required(),
   
  });


  return (
    <Container>
         
            <Row className='justify-content-center'>
            <Col md={6}>
            <h5 className=' ms-5 pt-4 '>SIGN UP</h5>
            </Col>
          </Row>
      <Row className='justify-content-center  ' >
        <Col md={6}>
        <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        fullname: '',
        email: '',
       password: '',
        confirmpassword: '',
        
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row >
            <Form.Group controlId="validationFormik01" className="position-relative">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Fullname"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                isInvalid={!!errors.fullname}
              />
              <Form.Control.Feedback type = 'invalid' tooltip>{errors.fullname}</Form.Control.Feedback>
            </Form.Group>
            </Row>
           
            <Row>
            <Form.Group  controlId="validationFormik02" className="position-relative">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type = "invalid" tooltip >{errors.email}</Form.Control.Feedback>
            </Form.Group>
            </Row>
                   
            <Row>
            <Form.Group controlId="validationFormikUsername" className="position-relative">
              <Form.Label>Password</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Password"
                 
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.password}
                </Form.Control.Feedback>
                 </Form.Group>
            </Row>

            <Row>
             <Form.Group  controlId="validationFormik03" className="position-relative">
              <Form.Label>Confirmpassword</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirmpassword"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmpassword}
              />

              <Form.Control.Feedback type="invalid" tooltip>
                {errors.confirmpassword}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>

         <Row className='justify-content-center pt-3 ' >
          <Button type="submit" className='mb-5 w-25 mt-3'> SIGN UP</Button>
          </Row>
            
        </Form>
      )}
      </Formik>
      </Col>
      </Row>
      
    </Container>
  )
}

export default Signup