import { useDispatch } from "react-redux";
import { increment } from "../store/counter/slice";

function Increment() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default Increment;
