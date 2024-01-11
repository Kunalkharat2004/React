/* eslint-disable react/prop-types */

import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemContext = createContext({
  currTodo: [],
  addToDo: () => {},
  deleteToDo: () => {},
});

const ToDoReducer = (currTodo, action) => {
  let newTodo = currTodo;

  if (action.type === "NEW_ITEM") {
    newTodo = [
      { name: action.payload.todoName, dueDate: action.payload.todoDate },
      ...currTodo,
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodo = currTodo.filter((item) => item.name != action.payload.todoName);
  }

  return newTodo;
};

const TodoItemContextProvider = ({ children }) => {
  const initialToDo = [];
  const [currTodo, dispatch] = useReducer(ToDoReducer, initialToDo);

  function convertDateFormat(inputDate) {
    // Create a Date object from the input string
    var dateObject = new Date(inputDate);

    // Extract day, month, and year components
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1; // Months are zero-based
    var year = dateObject.getFullYear();

    // Add leading zeros if needed
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    // Construct the new date format
    var outputDate = day + "-" + month + "-" + year;

    return outputDate;
  }

  const addToDo = (todoName, todoDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        todoDate: convertDateFormat(todoDate),
      },
    };
    dispatch(newItemAction);
  };

  const deleteToDo = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatch(deleteItemAction);
  };

  return (
    <TodoItemContext.Provider value={{ currTodo, addToDo, deleteToDo }}>
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
