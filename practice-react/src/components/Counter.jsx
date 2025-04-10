import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <div className="counter-box">
          <div>
            <h2 className="text">{count}</h2>
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Plus
            </button>
            <button
              onClick={() => {
                count === 0 ? setCount(0) : setCount(count - 1);
              }}
            >
              Minus
            </button>
            <button
              onClick={() => {
                setCount(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
