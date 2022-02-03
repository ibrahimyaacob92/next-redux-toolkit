import { useDispatch } from "react-redux";
import { getRandomValue } from "../store/counter/slice";

function Gamble() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(getRandomValue())}>Gamble</button>
    </div>
  );
}

export default Gamble;
