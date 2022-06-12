import { useState } from "react";

function SmartCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}

export default SmartCounter;