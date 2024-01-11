/* eslint-disable react/prop-types */

import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../contexts/TodoItemContext";

let TodoItem = ({task,date})=>{

  const {deleteToDo} = useContext(TodoItemContext);

    return <div className="container">

<div className="row row to-do-row">
        <div className="col-6">
         {task}
        </div>
        <div className="col-4">
        {date}
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger btn-to-do"
        onClick={()=> deleteToDo(task)}
        style={{
          fontSize:"1.3rem"
        }}
        ><MdDelete></MdDelete></button>
        </div>
      </div>

    </div>
}

export default TodoItem;