//import tuits from "./tuits.json";
// import './tuits.css'

import React, {useEffect} from "react";
import TuitListItem from "./TuitListItem";
import {useSelector, useDispatch} from "react-redux";
import {findAllTuits} from "../../../actions/tuits-action";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();

    useEffect(()=>
        findAllTuits(dispatch),
        []);
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}
export default TuitList;