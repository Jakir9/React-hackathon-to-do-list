import React from "react";

function AddButton({ handleClick, addText }) {
  return (
    <div>
    <button onClick={() => handleClick(addText)}style={{
    color: '#FFB2E6',
    fontWeight: 'bold',
    margin: '15px', }}>Add</button>
    </div>
  );
}
export default AddButton;
