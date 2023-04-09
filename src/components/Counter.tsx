import { useState } from "react";
import { State, useCounter } from "../useCounter";

export default function Counter() {
  // const [count, setCount] = useState(0);

  // let incrementCount = () => {
  //   setCount(count + 1);
  // };

  // let decrementCount = () => {
  //   setCount(count - 1);
  // };

  // let resetCount = () => {
  //   setCount(0);
  // };

  const count = useCounter((state: State) => state.count);
  const increment = useCounter((state: State) => state.increment);
  const decrement = useCounter((state: State) => state.decrement);
  const reset = useCounter((state: State) => state.reset);
  const incrementByValue = useCounter((state: State) => state.incrementByValue);

  return (
    <div className="app">
      <h2> Counter </h2>
      <span data-testid="count">{count}</span>

      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={() => incrementByValue(5)}>+5</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
