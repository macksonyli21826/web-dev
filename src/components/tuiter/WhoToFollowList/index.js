import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
 import who from "./who.json";

const WhoToFollowList = () => {
    return(

        <div class = "list-group">
            <li class="list-group-item wd-bold">
                <span>Who to follow</span>
            </li>
                {
                    who.map(who => {
                        return (<WhoToFollowListItem who={who}/>);
                    })
                }
        </div>
    )
};
 export default WhoToFollowList;