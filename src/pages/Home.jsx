import {   Col, Container, Row } from "react-bootstrap";
import HomeBanner from "../components/HomeBanner";
import { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import { useDispatch, useSelector } from "react-redux";    //state
import { getProduct } from "../redux/productSlice";


function Home() {
  const dispatch = useDispatch();    //state
  const products = useSelector((state)=> state.products.data);    //state
 //const [products, setProduct] = useState([]);
useEffect(()=>{ 
          fetch('./products.json')
          .then((data)=>data.json())
          .then((res)=>dispatch(getProduct(res.products)));              //setProduct(res.products)); //state

        }, []);

//console.log("products------>", products);


    return(
      <>
       <HomeBanner />
       <Container>
        <Row>
          <Col className = "my-3">
          <h3>
            Latest Products
          </h3>
          </Col>
        </Row>
           <Row>
             {products.map((product) => (
                
                <SingleProduct products = {product}/>

            
             )) }
            
           </Row>
       </Container>
            
      </>
    )    
}

export default Home;