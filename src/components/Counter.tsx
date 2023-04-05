import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let resetCount = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <p>Count: {count}</p>

      <div className="buttons">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
        <button onClick={resetCount}>reset</button>
      </div>
    </div>
  );
}
