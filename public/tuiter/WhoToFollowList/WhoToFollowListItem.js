const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
        <div class = "wd-flex wd-space-between"> <!-- make content and follow button left and right -->
            <div class = "wd-flex"> <!-- make avatar and content display left and right -->
                <!-- the avatar division -->
                <div>
                    <img class = "wd-avatar-1" src = "${who.avatarIcon}">
                </div>
                <!-- the text division -->
                <div>
                    <div class = "wd-bold">
                        ${who.userName}
                        <i class = "fa fa-check-circle"></i>
                    </div>
                    @${who.handle}
                </div>   
            </div> <!-- end of content display left and right -->
        
            <div>    
                <a href="follow.html" class="btn btn-primary btn-block rounded-pill">
                    Follow
                </a>
            </div>  
        </div> <!-- end of the whole block -->
        </li>

        
    `);
}
export default WhoToFollowListItem

