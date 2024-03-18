import { observer } from "mobx-react-lite";
import "./index.css";
import countClass from "./store/counterClass";

const Counter = observer(() => {
  return (
    <div className="btnBlock">
      <button className="btn" onClick={() => countClass.increment()}>
        +
      </button>
      <span>{countClass.count}</span>
      <button className="btn" onClick={() => countClass.decrement()}>
        -
      </button>
    </div>
  );
});
export default Counter;
