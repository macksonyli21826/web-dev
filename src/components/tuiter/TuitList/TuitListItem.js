import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return (
        <div className = "list-group-item">
            <div className = "wd-flex">
                <div>
                    <img className = "wd-avatar-1 me-3" src = {tuit["avatar-image"]} alt = "avatar"/>
                </div>
                <div>
                    <div className = "wd-flex wd-space-between">
                        <div className = "wd-flex">
                            <div className = "wd-bold wd-white">
                                {tuit.postedBy.username}
                            </div>
                            <div className = "ms-1 wd-darkgrey">
                                @{tuit.handle}
                            </div>
                        </div>
                        <div className = "me-0">
                            <i onClick={() =>
                                deleteTuit(tuit)}
                               className="fa fa-window-close">
                            </i>
                        </div>
                    </div>

                    <div className = "wd-white">
                        {tuit.tuit}
                    </div>
                    <div className = "card wd-round-corner mt-2 overflow-hidden">
                    {tuit.attachments && tuit.attachments.video &&
                        <iframe height = "300px"
                                title = "rocket"
                                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}>

                        </iframe>
                    }
                    {tuit.attachments && tuit.attachments.image &&
                        <img className = "card-img" src = {tuit.attachments.image} alt = "post"/>
                    }
                    </div>
                    <div className="row mt-2 wd-darkgrey">
                        <div className="col-3">
                            <i className="fa fa-comment me-3"></i>
                            {tuit.stats.comments}
                        </div>
                        <div className="col-3">
                            <i className="fa fa-retweet me-3"></i>
                            {tuit.stats.retuits}
                        </div>
                        <div className="col-3">
                            <TuitStats tuit={tuit} />
                        </div>
                        <div className="col-3">
                            <i className="fa fa-upload"></i>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default TuitListItem;