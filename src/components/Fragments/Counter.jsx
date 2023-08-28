import { useState } from "react";

const Counter = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);
  const handleCount = () => {
    setIncrement(increment + 1);
  };
  return (
    <div>
      <h1>{increment}</h1>
      <h1>{decrement}</h1>

      <button onClick={handleCount}>+</button>
      <button onClick={() => setDecrement(decrement - 1)}>-</button>
    </div>
  );
};

export default Counter;
