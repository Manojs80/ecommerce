import React, { useState } from 'react'
import {  Col, Container, Row } from 'react-bootstrap'
import "./Contact.css";
function Contact() {

  const [contactformdata,setcontactformdata]=useState(
  {
  fullname:'',
  email:'',
  number:'',
  message:'',
 
  });
  const [error,setError]=useState(
  {
  fullname:'',
  email:'',
  number:'',
  message:'',
  });
  const newErrors = {
    fullname:'',
    email:'',
    number:'',
    message:'',
  }
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(validateform()){
     console.log("form submitted",contactformdata); 
     
    }
    
  }
  const formdata = (e)=>{
           const {name,value}= e.target; 
        setcontactformdata({...contactformdata,[name]:value})
  }
const validateform = ()=>{
  let valid = true;
   if(!contactformdata.fullname.trim()){
      newErrors.fullname = "fullname is required";
      valid = false;
    }else if(contactformdata.fullname.length < 3){
       newErrors.fullname = "fullname name should contain minimum 3 letters";
       valid = false;}
   if(!contactformdata.email.trim()){
      newErrors.email = "email is required";
      valid = false;
    }else if(!/\S+@\S+\.\S+/.test(contactformdata.email) ){
       newErrors.email = "please enter valid email";
       valid = false;}
   if(!contactformdata.number.trim()){
      newErrors.number = "phone number is required";
      valid = false;  
   }else if(!/^\d{10}$/.test(contactformdata.number)){
       newErrors.number = "phone number must be 10 digits";
         valid = false;}
   if(!contactformdata.message.trim()){
      newErrors.message = " please write something";
      valid = false;
    }else if(contactformdata.message.length < 10){
       newErrors.message = "please discribe more";
       valid = false;
    }
   setError(newErrors);
   return valid;
  }

  return (   
    <Container>
      <Row className='justify-content-center' >
        <Col md={6}>
          <div className=' shadow  bg-white  p-4 m-4' >
            <form  className='form-container  my-4' onSubmit={handleSubmit} > 
                <input type='text' name='fullname' placeholder='name' onChange={formdata}/>
                <span className='error'>{error?.fullname?? ''} </span>
                <input type='email' name='email' placeholder='email' onChange={formdata}/>
                <span className='error'>{error?.email?? ''} </span>
                <input type='Number' name='number' placeholder='number' onChange={formdata} />
                <span className='error'>{error?.number?? ''} </span>
                <textarea type='text' rows={5} name='message' placeholder='name' onChange={formdata} ></textarea>
                <span className='error'>{error?.message?? ''} </span>
                 <button> Send Message </button>


            </form>


          </div>

        </Col>
      </Row>
    </Container>
  )
}

export default Contact