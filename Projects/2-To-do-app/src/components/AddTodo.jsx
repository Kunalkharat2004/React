/* eslint-disable react/prop-types */

import { useRef } from "react";
import { useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import { TodoItemContext } from "../contexts/TodoItemContext";

let AddTodo = () => {

  let todoNameRef = useRef("");
  let dueDateRef = useRef("");

  const {addToDo} = useContext(TodoItemContext);

  const onAddBtn = (e) => {
    e.preventDefault();
    addToDo(todoNameRef.current.value, dueDateRef.current.value);
    todoNameRef.current.value="";
    dueDateRef.current.value="";
  };
  return (
    <div className="container">
      <form onSubmit={onAddBtn} method="POST">
        <div className="row to-do-row">
          <div className="col-6">
            <input
              type="text"
              name="todo"
              placeholder="Enter todo"
             ref={todoNameRef}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              name="date"
             ref={dueDateRef}
            />
          </div>
          <div className="col-2 add-to-do-btn">         
            <button
              className="btn btn-success btn-to-do"
              style={{
                fontSize: "1.3rem",
              }}
            >
              <IoIosAdd />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;