import { combineReducers } from 'redux'
 import counter from './slices/counter';
 import products  from './slices/productsSlicer';
 import cart from './slices/cartSlice'
import user from './slices/user'
const reducers = combineReducers({
  counter,
  products,
  user, 
  cart,
})

export default reducers;