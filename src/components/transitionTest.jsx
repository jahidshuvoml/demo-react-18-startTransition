import React, { useState } from "react";
import { useTransition } from "react/cjs/react.development";

const TransitionTest = () => {
  const numberOfButton = 3000;
  const [input, setInput] = useState("");
  const [query, setQuery] = useState([...Array(numberOfButton)].fill("demo"));
  const [pending, startTransition] = useTransition(true);
  const handleChange = (e) => {
    setInput(e.target.value);
    // setQuery([...Array(numberOfButton)].fill(input));
    startTransition(() => {
      setQuery([...Array(numberOfButton)].fill(input));
    });
  };
  console.log(query);
  return (
    <div className="m-transition-test">
      <div className="m-transition-test__centered">
        <input
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="type here"
        />
      </div>
      {/* {query.map((val, index) => (
        <button key={index}>{val}</button>
      ))} */}
      {pending ? (
        <h1>Loading</h1>
      ) : (
        query.map((val, index) => <button key={index}>{val}</button>)
      )}
    </div>
  );
};

export default TransitionTest;
