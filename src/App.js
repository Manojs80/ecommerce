import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./admin/AddProduct";
import Signup from "./components/Signup";


function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<ProductDetails />} />  
        <Route path="/signup" element={<Signup />} />   
        <Route path="/admin/product/add" element={<AddProduct />} />        
     </Routes>
     <Footer />
     </Router>
  );
}

export default App  