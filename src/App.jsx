import react, { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import List from "./components/List";

function App() {
 const [todo, setTodo] = useState(
  JSON.parse(localStorage.getItem("my-todo")) || []
 );

 const saveTodoInLocalStorage = (data) => {
  localStorage.setItem("my-todo", JSON.stringify(data));
 };

 const deleteHandler = (id) => {
  const filterTodo = todo.filter((elem) => elem.id !== id);
  saveTodoInLocalStorage(filterTodo);
  setTodo(filterTodo);
 };

 const updateCheckboxStatusHandler = (id, status) => {
  const filterTodo = todo.map((elem) => {
   if (elem.id === id) {
    return {
     id,
     name: elem.name,
     completed: status,
    };
   }
   return elem;
  });
  saveTodoInLocalStorage(filterTodo);
  setTodo(filterTodo);
 };

 useEffect(() => {
  localStorage.setItem("my-todo", JSON.stringify(todo));
 }, [todo]);

 return (
  <>
   <div>
    <Navigation todo={todo} setTodo={setTodo} />
    {todo.length !== 0 && <h3 id="headline">Todo list</h3>}
    <div id="todo_container">
     <div>
      {todo.length === 0 ? (
       <div id="empty_container">
        <div>
         <h1>Empty!</h1>
         <p>It seems you have not add your todo yet!</p>
        </div>
       </div>
      ) : (
       todo.map((elem) => (
        <List
         key={elem.id}
         {...elem}
         deleteHandler={deleteHandler}
         updateCheckboxStatusHandler={updateCheckboxStatusHandler}
        />
       ))
      )}
     </div>
    </div>
   </div>
  </>
 );
}

export default App;
