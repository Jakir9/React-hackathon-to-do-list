import React from "react";

const Input = ({ text, handleChange }) => {
  //get text and handleChange
  return (
    <div>
      <input value={text} onChange={handleChange} />
    </div>
  );
};

export default Input;
