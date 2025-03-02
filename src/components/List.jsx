import React, { useState } from "react";

import "../App.css";

function List({
 id,
 name,
 completed,
 deleteHandler,
 updateCheckboxStatusHandler,
}) {
 const handleCheckboxClick = () => {
  updateCheckboxStatusHandler(id, !completed);
 };

 return (
  <div id="list">
   <div className="checkbox_text">
    <input
     type="checkbox"
     onClick={handleCheckboxClick}
     defaultChecked={completed}
    />
    <div
     className="text"
     style={
      completed
       ? { textDecoration: "line-through", color: "grey" }
       : { textDecoration: "none", color: "black" }
     }
    >
     {name}
    </div>
   </div>
   <button className="delete_action" onClick={() => deleteHandler(id)}>
    delete
   </button>
  </div>
 );
}

export default List;
