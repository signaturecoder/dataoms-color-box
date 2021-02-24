import React, { useState } from "react";
import "./App.css";
import Box from "../src/components/Box";

function App() {
  const [bgColor, setBgColor] = useState("orange");
  const [boxNum, setBoxNum] = useState(0);
  const [boxes, setBoxes] = useState(Array.from(Array(9).keys()));

  const handleInputChange = (e) => {
    setBoxNum(e.target.value);
  };

  const handleColor = (event) => {
    const dublicateBoxes = [...boxes];
   const matchedBox = dublicateBoxes.find((box) => box === boxNum)
   setBoxes(dublicateBoxes);
    console.log(matchedBox);
    console.log("event", dublicateBoxes);
     event.preventDefault();
  };
  return (
    <div className="App">
      <input
        type="number"
        placeholder="Enter Number"
        onChange={handleInputChange}
        value={boxNum}
      ></input>
      <button
        style={{ width: "100px", height: "50px", borderRadius: "25px" }}
        onClick={handleColor}
      >
        Color Me
      </button>
      {boxes.map((boxItem, index) => (
        <Box key={index} boxNum={index + 1} />
      ))}
    </div>
  );
}

export default App;
