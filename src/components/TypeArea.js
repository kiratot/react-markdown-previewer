import React from "react";

const TypeArea = ({ inputText, onChange }) => {
  return (
    <div className="editor">
      <textarea
        type="text"
        id="editor"
        onChange={onChange}
        value={inputText}
        rows="20"
        cols="100"
      />
    </div>
  );
};
export default TypeArea;
