import { useCallback, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  const switchTheSign = useCallback(() => {
    setCount((count) => count * -1);
  }, []);

  return (
    <>
      <p>count is {count}</p>
      <div className="flex">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
        <button onClick={switchTheSign}>switch the sign</button>
      </div>
    </>
  );
}

export default App;
