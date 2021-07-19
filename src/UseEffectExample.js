import React, { useState, useEffect } from "react";
import MousePosition from "./MousePosition";

const UseEffectExample = () => {
  //   const [count, setCount] = useState(0);
  //   const [name, setName] = useState("");

  const [active, setActive] = useState(true);

  //Example for component did update.

  //   useEffect(() => {
  //     document.title = `Count is ${count}`;
  //   });

  // Updating component conditionally.

  //   useEffect(() => {
  //     console.log("The component jus got updated.");
  //     document.title = `Count is ${count}`;
  //   }, [count]);

  //Effect runs only once.

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);

  return (
    <div>
      <button onClick={() => setActive(!active)}>Click me </button>
      {active && <MousePosition />}
    </div>
  );
};

export default UseEffectExample;
