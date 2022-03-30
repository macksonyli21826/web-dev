import React from "react";
const PostItem = ({post = {
    }
}) => {
    return (
        <div>
            <div className = "wd-flex">
                <div>
                    <img className = "wd-avatar-1 me-3" src = {post.avatarIcon} alt = "avatar"/>
                </div>
                <div>
                    <div className = "wd-flex wd-space-between">
                        <div className = "wd-flex">
                            <div className = "wd-bold wd-white">
                                {post.userName}
                            </div>
                            <div className = "ms-1 wd-white">
                                <i className = "fa fa-check-circle"></i>
                            </div>
                            <div className = "ms-1 wd-darkgrey">
                                @{post.handle}
                            </div>
                            <div className = "ms-1 wd-darkgrey">
                                - {post.time}
                            </div>
                        </div>
                        <div className = "wd-darkgrey me-0">
                            <i className = "fa fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className = "wd-white">
                        {post.topic}
                    </div>
                    <div className="card wd-round-corner mt-2 overflow-hidden">
                        <img src={post.image} className="card-img-top" alt = "ipost's related"/>

                        <div className="card-body bg-black wd-border-top py-0">

                            {post.imageTextHeader ?
                                <div className="wd-white pt-2">
                                    {post.imageTextHeader}
                                </div>
                                : ''}

                            <div className = "wd-darkgrey">
                                {post.imageTextContent ? post.imageTextContent : ''}
                            </div>

                            {post.imageTextLink ? (
                                <div className="wd-darkgrey pb-2">
                                    <i className="fa fa-link"></i> {post.imageTextLink}
                                </div>
                            ) : ''}
                        </div>
                    </div>
                    <div className = "row mt-2 wd-darkgrey">
                        <div className = "col-3">
                            <i className = "fa fa-comment me-3"></i>
                            {post.commentNum}
                        </div>
                        <div className = "col-3">
                            <i className = "fa fa-retweet me-3"></i>
                            {post.forwardNum}
                        </div>
                        <div className = "col-3">
                            <i className = "fa fa-heart me-3"></i>
                            {post.likeNum}
                        </div>
                        <div className = "col-3">
                            <i className = "fa fa-upload"></i>
                        </div>
                    </div>
                </div>

            </div>
            <hr/>
        </div>
    )
}
export default PostItem;