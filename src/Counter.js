import { useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "./redux/slices/counter"; 
import {useSelector} from "react-redux" ; 
function Counter() {
  const dispatch = useDispatch();
  const data = useSelector((data)=>data.counter.count)
  return (
    <>


Counter : {data}
<br></br>
      <button onClick={() => dispatch(increment())}> Increment</button> 
      <button onClick={() => dispatch(decrement())}> Decrement</button><br></br>
      <button onClick={() => dispatch(incrementBy(5))}> Increment By Amount</button>
    </>
  );
}

export default Counter;
