import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import TaskDone from "./components/TaskDone";
import TodoItemContextProvider from "./contexts/TodoItemContext";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <TodoName></TodoName>

        <div className="add-to-do">
          <AddTodo></AddTodo>
        </div>

        <TaskDone></TaskDone>

        <div className="items-container">
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
