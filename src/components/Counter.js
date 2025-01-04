// import logo from "./logo.svg";
// import "./App.css";

import { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div><div>{count}</div></div>
      <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      </div>
      <div>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      </div>
    </div>
  );
};

function App() {
  console.log("should show an error in eslint");
  return <Counter />;
}

export default Counter;
