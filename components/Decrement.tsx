import { useDispatch } from "react-redux";
import { decrement, increment } from "../store/counter/slice";

function Decrement() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Decrement;
