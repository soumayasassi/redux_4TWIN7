import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';

import Counter from './components/Counter';
import Products from './components/Products';
import NavBarComponent from './components/NavBarComponent';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import { fetchProducts } from './redux/slices/productsSlicer';
import {useDispatch} from "react-redux";
import NavbarComponent from './components/Navbar';
import Cart from './components/Cart';


function App() {
  const dispatch =  useDispatch() 
  return (
    <div className="App"> 
      
      {/* <Login/>
      <Profile/> 
         <Counter/>
      */}
   
           
<NavbarComponent/>
      
 <Routes>
 <Route path='/products'>
 {/* Each route can define a "loader" function to provide data to the route element before it renders. */}
      <Route path='list' element={<Products />}
      npm loader={dispatch(fetchProducts())}/>
      <Route path='add' element={<AddProduct />}/>
      <Route path='update/:id' element={<UpdateProduct />}/>
      
    </Route>
    <Route path="/cart" element={<Cart />} />
<Route  path='*' element={<NotFound/>}/>

 </Routes>
     
    </div>
  );
}

export default App;
