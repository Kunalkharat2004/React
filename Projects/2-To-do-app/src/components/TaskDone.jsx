import styles from "./TaskDone.module.css";
import { useContext } from "react";
import { TodoItemContext } from "../contexts/TodoItemContext";

const TaskDone=()=>{
    const {currTodo} = useContext(TodoItemContext);

    return(
    <>
    {currTodo.length === 0 &&  <p className={styles.taskDone}>All Tasks completed!</p>}
    </>
    )
}

export default TaskDone;