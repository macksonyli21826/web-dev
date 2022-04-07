import React from "react";
import {useDispatch} from "react-redux";
//import TuitStats from "./TuitStats";
import jsImage from "../../../images/js.png";
import {deleteTuit, updateTuit} from "../../../actions/tuits-action";


const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    //const deleteTuit = (tuit) => {
      //  dispatch({type: 'delete-tuit', tuit})
    //};
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
                                {tuit.username}
                            </div>
                            <div className = "ms-1 wd-darkgrey">
                                @{tuit.handle}
                            </div>
                        </div>
                        <div className = "me-0">
                            <i className="fa fa-window-close"
                                onClick={() => deleteTuit(
                                dispatch, tuit)}></i>
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
                        <img className = "card-img" src = {jsImage} alt = "post"/>
                    }
                    </div>
                    <div>
                        Likes: {tuit.likes}
                        <i onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            likes: tuit.likes + 1
                        })} className="far fa-thumbs-up ms-2"></i>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default TuitListItem;
/*
Below are the four icons under every tuit. It does not work at this moment

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
 */