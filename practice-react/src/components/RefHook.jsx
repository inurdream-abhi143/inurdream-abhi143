import { useRef } from "react";
import "./Counter.css";

// in this example we will use useRef Hook to directly change Dom
const RefHook = () => {
  // make a object using useRef

  const inputRef = useRef();
  // write onClick Function to do something after clicking submit button

  const changeBgColor = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  };
  return (
    <>
      {/* add ref to input filed so that useref we use  */}

      <input ref={inputRef} type="text" placeholder="Enter your name"></input>
      <button onClick={changeBgColor}>Submit</button>
    </>
  );
};

export default RefHook;
