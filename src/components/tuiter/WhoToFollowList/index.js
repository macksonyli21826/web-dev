import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
//import who from "./who.json";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return(
        <div>
            <div className="list-group">
                <li className="list-group-item wd-bold">
                    <span>Who to follow</span>
                </li>
                {
                    who.map(who => {
                        return (<WhoToFollowListItem who={who}/>);
                    })
                }
            </div>
        </div>

    )
};
 export default WhoToFollowList;
/*

 */