import React from "react";
const WhoToFollowListItem = ({who = {
    avatarIcon:'/images/nasa-fo.jpg',
    userName: 'NASA',
    handle:'NASA',}
}) => {
    return(
        <div>
            <li className="list-group-item">
                <div className="wd-flex wd-space-between">
                    <div className="wd-flex">
                        <div>
                            <img src = {who.avatarIcon}
                                 className = "wd-avatar-1" />
                        </div>

                        <div>
                            <div class = "wd-bold">
                                {who.userName}
                                <i className = "fa fa-check-circle"></i>
                            </div>
                            @{who.handle}

                        </div>
                    </div>
                    <div>
                        <a href="follow.html" className="btn btn-primary btn-block rounded-pill">
                            Follow
                        </a>
                    </div>
                </div>
            </li>
        </div>
    );
}
export default WhoToFollowListItem

