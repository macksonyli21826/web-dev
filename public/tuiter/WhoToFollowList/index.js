 import WhoToFollowListItem from "./WhoToFollowListItem.js";
 import who from "./who.js";

const WhoToFollowList = () => {
    return(`
        <div class = "list-group">
        <li class="list-group-item">
            <span class = "wd-bold">Who to follow</span>
           
        </li>
        ${
            who.map(who =>{
                return(WhoToFollowListItem(who));
            }).join('')
        }
        </div>
        
    `);
}
 export default WhoToFollowList;