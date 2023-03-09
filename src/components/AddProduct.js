import {useState} from "react"
import { Form, Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import { addProduct } from "../services/api";
import { useDispatch , useSelector } from 'react-redux';
import { createProd } from "../redux/slices/productsSlicer";

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newproduct, setNewProduct] =useState({
    name: "",
    price: 0,
    img: "",
    like: 0,
    quantity: 0,
    description: "",
})

const handleChange = (e) =>
{
  e.preventDefault()
  setNewProduct({ ...newproduct, [e.target.name]: e.target.value })
 
}
const handleLoad = (e) =>
{
  //e.preventDefault()
  console.log(e.target.files);
  setNewProduct({ ...newproduct, [e.target.name]: e.target.files[0].name });

}
  
    return (
<>
    <h2>Add Product</h2>
    <Form style={{ marginLeft : "50px" }} >
      <Form.Group controlId="formName">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text"  
         onChange={(e) => handleChange(e)}
        placeholder="Enter a Name" name="name"  />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text" 
        onChange={(e) => handleChange(e)} 
         placeholder="Enter a Description" 
         name="description" />
      </Form.Group>

      <Form.Group controlId="formPrice">
        <Form.Label>Price:</Form.Label>
        <Form.Control type="number" 
        onChange={(e) => handleChange(e)}
         placeholder="Enter a Price"
         name="price" />
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label>Quantity:</Form.Label>
        <Form.Control type="text"  
        onChange={(e) => handleChange(e)}
        placeholder="Enter a  Quantity"
        name="quantity" />
      </Form.Group>

      <Form.Group controlId="formImg">
        <Form.Label>Image:</Form.Label>
        <Form.Control type="file" 
        onChange={(e) => handleLoad(e)} 
         name="img" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>dispatch(createProd(newproduct))}>
        Add  Product
      </Button>
      <Button onClick={()=>navigate('/products/list') } variant="secondary" >Back To Products</Button>
    </Form>


</>


      );
}

export default AddProduct;