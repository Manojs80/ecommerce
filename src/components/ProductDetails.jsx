import  { useEffect, useState } from 'react'
import { Container, ListGroup, Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
//import { getProduct } from '../redux/productSlice'

const ProductDetails = () => {
  
    const {id} = useParams();
    console.log("id>",id);
    // const [products, setProducts] = useState([]);
     const [product, setProduct] = useState(null);
   // const [productFetched, setProductsFetched] = useState(false);
    
  // const getProducts = () => { 
       // fetch('./products.json')
        //.then((data)=>data.json())
        //.then((res)=> setProducts(res.products));
         const products = useSelector((state)=> state.products.data); //state
        // setProductsFetched(true);
  // }

    useEffect(()=>{ 

       // if(!productFetched){
       //     getProducts();
       // }

      if (products.length > 0){
                console.log("products------>", products.length);
                const res = products.find((product) => product.id === Number(id));
                setProduct(res);
                console.log("product------>", product);
              }
            }, [id, products,  product]);  //productFetched,
            
            
  return (
    <Container>
        {product && (
            <Row className='my-5'>
            <Col md={4}>
               <img src={product.image} alt={product.name} className='w-100' />
            </Col>
            <Col md={8}> 
           <ListGroup>
           <ListGroup.Item> <h3> {product.name}</h3></ListGroup.Item>
            <ListGroup.Item> <h4>{product.brand}</h4> </ListGroup.Item>
            <ListGroup.Item> <h5>{product.price}</h5> </ListGroup.Item>
            <ListGroup.Item> {product.description} </ListGroup.Item>
            <ListGroup.Item> {product.category} </ListGroup.Item>
                                
            </ListGroup>
            </Col>
        </Row>
       ) }
    </Container>
  )
}

export default ProductDetails