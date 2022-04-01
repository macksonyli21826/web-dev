import React from "react";
import TodoItem from "./TodoItem.js";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <ul>
            {
                todos.map((todo, index) =>{
                    return(<TodoItem todo = {todo} key={index}/>);
                })
            }
        </ul>
    );
}
export default TodoList;