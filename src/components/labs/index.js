// labs/index

import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output/index.js";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import {Link} from "react-router-dom";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/home">
                Tuiter
            </Link>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <TodoItem/>
            <TodoList/>
        </>
    )
};

export default Labs;
