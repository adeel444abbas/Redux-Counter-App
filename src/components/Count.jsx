import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  return <h2>You clicked me {count} times!</h2>;
};

export default Count;
