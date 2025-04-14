import { useState, useEffect, useLayoutEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  // theer is mo major difference between useEffect and useLayoutEffect
  // useffect run after component render and useLayoutEffect run before component render
  // useLayoutEffect is used to read layout from the DOM and synchronously re-render
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() * 1000);
    }
  });
  //  that is useEffect
  // useLayoutEffect(() => {
  //   if (count === 0) {
  //     setCount(Math.random() * 1000);
  //   }
  // });
  return (
    <>
      {/* <div className="container">
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
      </div> */}

      {/* this   example of useEffect and useLayout*/}
      <div className="container">
        <p>The Random Number is {count}</p>
        <button onClick={() => setCount(0)}>Get Number</button>
      </div>
    </>
  );
};

export default Counter;
