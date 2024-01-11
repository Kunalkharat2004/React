import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  let todoItems = [
    {
      name: "Buy Milk",
      dueDate: "2/1/2024",
    },
    {
      name: "Go to college",
      dueDate: "2/1/2024",
    },
    {
      name: "Drink water",
      dueDate: "right now",
    },
  ];

  return (
    <center className="todo-container">
      <TodoName></TodoName>
      <div className="add-to-do">
        <AddTodo></AddTodo>
      </div>

      <div className="items-container">
        <TodoItems items={todoItems}></TodoItems>
      </div>
    </center>
  );
}

export default App;
