import React, { useState } from "react";
import { uid } from "uid";

import "../App.css";

function Navigation({ todo, setTodo }) {
 const [name, setName] = useState("");

 const submitHandler = async (event) => {
  event.preventDefault();

  if (!name) {
   window.alert("Please write something in the given field!");
  }

  const data = {
   id: uid(),
   name: name,
   completed: false,
  };

  setTodo([data, ...todo]);
  setName("");
 };

 return (
  <div id="navigation_container">
   <form onSubmit={submitHandler}>
    <input
     type="text"
     className="name_input"
     placeholder="Write something here"
     value={name}
     onChange={(event) => setName(event.target.value)}
    />
    <input type="submit" className="submit_button" value="Add" />
   </form>
  </div>
 );
}

export default Navigation;
