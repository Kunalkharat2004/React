/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemContext } from "../contexts/TodoItemContext";

const TodoItems = ()=>{
    const {currTodo} = useContext(TodoItemContext);

    return(
        <>
        {
        currTodo.map((item)=> <TodoItem key={item.name} task={item.name} date={item.dueDate} ></TodoItem>)
       }
        </>
    )
}
export default TodoItems;