import {createContext} from "react";

export const TodoItemContext = createContext({
    currTodo:[],
    addToDo: ()=>{},
    deleteToDo:()=>{},
});
