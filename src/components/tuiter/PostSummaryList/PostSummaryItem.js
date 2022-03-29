import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library " +
                "that makes it very easy to build Single Page Applications or SPAs",
            "image": "/images/react-blue.png",
        }
    }) => {
    return(
        <div>
            <li className = "list-group-item">
                <div className = "wd-flex wd-space-between">
                    <div>
                        <div className = "wd-darkgrey">
                            {post.topic}
                        </div>
                        <div className = "wd-flex">
                            <div className = "wd-bold">
                                {post.userName}
                                <i className = "fa fa-check-circle"></i>
                            </div>
                            <div className = "mx-1 wd-darkgrey">
                                - {post.time}
                            </div>
                        </div>
                        <div className = "wd-bold me-3">
                            {post.title}
                        </div>
                    </div>
                    <div>
                        <img src={post.image} width = "100" className = "wd-image-1"/>
                    </div>
                </div>
            </li>
        </div>
    )
};

export default PostSummaryItem;