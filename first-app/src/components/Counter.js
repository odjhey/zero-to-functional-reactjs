import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => ++prev);
    }, 2000);
  }, []);

  return <p>{count}</p>;
};

export default Counter;
