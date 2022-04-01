// labs/index

import React from "react";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output/index.js";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import {Link} from "react-router-dom";
import ReduxExamples from "./redux-examples";
import {createStore} from "redux";
import {Provider} from "react-redux";
const reducer = (state = [], action) => {
    switch(action.type) {
        default:
            return state;
    }
}
const store = createStore(reducer);

const Labs = () => {
    console.log('labs');
    return(
        <Provider store={store}>
            <h1>Labs</h1>
            <Link to="/">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <TodoItem/>
            <TodoList/>
            <ReduxExamples/>
        </Provider>
    )
};

export default Labs;
