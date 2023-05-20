import React from "react";
function List({ func }) {
  return (
    <div>
      <ul style= {{ 
        listStyleType: 'none',}}>
      {func}
      </ul>
    </div>
  );
}
export default List;
