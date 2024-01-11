/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

const TodoItems = ({items})=>{
    return(
        <>
        {
        items.map((item)=> <TodoItem key={item.name} task={item.name} date={item.dueDate}></TodoItem>)
       }
        </>
    )
}
export default TodoItems;