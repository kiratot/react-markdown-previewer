import React, { useState } from "react";

import "./App.scss";
import TypeArea from "./components/TypeArea";
import PreviewArea from "./components/PreviewArea";
import { initialText } from "./initialText";
function App() {
  const [input, setInput] = useState(initialText);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="">
      <TypeArea inputText={input} onChange={handleChange} />
      <PreviewArea inputText={input} />
    </div>
  );
}

export default App;
