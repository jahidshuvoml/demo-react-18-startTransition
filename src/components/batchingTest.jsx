import React, { useState } from "react";
import { flushSync } from "react-dom";

const BatchingTest = () => {
  const [color, setColor] = useState(true);
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setColor(!color); // will re-render here
      setNumber(number + 1); // will re-render here
    }, 0);
  };
  console.log("rendering");
  return (
    <div className="m-batching-test">
      <h2>React 18 </h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default BatchingTest;
