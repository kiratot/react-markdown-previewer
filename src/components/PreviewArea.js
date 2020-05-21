import React from "react";
import marked from "marked";
const PreviewArea = ({ inputText }) => {
  marked.setOptions({
    breaks: true,
  });
  const createMarkup = () => {
    return { __html: marked(inputText) };
  };
  return <div id="preview" dangerouslySetInnerHTML={createMarkup()}></div>;
};

export default PreviewArea;
