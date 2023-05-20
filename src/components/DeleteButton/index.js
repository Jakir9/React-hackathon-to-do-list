import React from "react";

function DeleteButton({ handleDelete }) {
  return (
    <button onClick={() => handleDelete()} style={{ margin: "15px" }}>
      Delete
    </button>
  );
}

export default DeleteButton;
