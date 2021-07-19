import React, { useEffect, useState } from "react";

const MousePosition = () => {
  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);
  const [name, setName] = useState("rytfgkgh");

  //   const ConsoleLogPosition = (e) => {
  //     console.log("Mouse just moved.");
  //     setX(e.clientX);
  //     setY(e.clientY);
  //   };

  //   useEffect(() => {
  //     console.log("Use effect ran");
  //     window.addEventListener("mousemove", ConsoleLogPosition);

  //     return () => {
  //       console.log("Component just unmounted");
  //       window.removeEventListener("mousemove", ConsoleLogPosition);
  //     };
  //   }, []);

  useEffect(() => {
    setName("An");
  }, []);

  return (
    <div>
      {/* {" "}
        X - {x} and Y - {y} */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default MousePosition;
