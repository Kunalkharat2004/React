import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import TaskDone from "./components/TaskDone";
import { TodoItemContext } from "./contexts/TodoItemContext";

function App() {

  const [currTodo,setCurrToDo] = useState([]);

  function convertDateFormat(inputDate) {
    // Create a Date object from the input string
    var dateObject = new Date(inputDate);
  
    // Extract day, month, and year components
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1; // Months are zero-based
    var year = dateObject.getFullYear();
  
    // Add leading zeros if needed
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
  
    // Construct the new date format
    var outputDate = day + '-' + month + '-' + year;
  
    return outputDate;
  }

  const addToDo =(todoName,todoDate)=>{
    setCurrToDo((currTodo)=>[{name:todoName,dueDate:convertDateFormat(todoDate)},...currTodo]); //Updater function
  } 
  

  const deleteToDo = (task)=>{
  let newTodo = currTodo.filter(todo=> todo.name != task);
   setCurrToDo(newTodo);
  }
  return (
    <TodoItemContext.Provider value={{currTodo,addToDo,deleteToDo}}>
      
    <center className="todo-container">

      <TodoName></TodoName>

      <div className="add-to-do">
        <AddTodo 
        ></AddTodo>
      </div>

      <TaskDone></TaskDone>

      <div className="items-container">
        <TodoItems></TodoItems>
      </div>

    </center>
    </TodoItemContext.Provider>
  );
}

export default App;
