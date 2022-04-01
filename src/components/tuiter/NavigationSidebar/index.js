import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = (
    {
        active = 'home'
    }) => {return(
        <div>
            <div classNameName="list-group">
                <Link to = "/" className="list-group-item" >
                    <div className = "row">
                        <div className= "col-2">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                        </div>
                    </div>
                </Link>
                <Link to = "/tuiter" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-home"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Home</span>
                        </div>
                    </div>
                </Link>
                <Link to = "/tuiter/explore" className = {`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-hashtag"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Explore</span>
                        </div>
                    </div>
                </Link>
                <Link to = "/" className = {`list-group-item ${active === 'notification' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-bell"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Notifications</span>
                        </div>
                    </div>
                </Link>

                <Link to = "/" className = {`list-group-item ${active === 'message' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Messages</span>
                        </div>
                    </div>
                </Link>
                <Link to = "/" className = {`list-group-item ${active === 'bookmark' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-bookmark"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Bookmarks</span>
                        </div>
                    </div>
                </Link>
                <Link to = "/" className = {`list-group-item ${active === 'list' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-list-ul"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Lists</span>
                        </div>
                    </div>
                </Link>

                <Link to = "/tuiter/profile" className = {`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-user-alt"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Profile</span>
                        </div>
                    </div>
                </Link>

                <Link to = "/" className = {`list-group-item ${active === 'more' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <span className = "fa-stack start-0">
                                 <i className = "fas fa-circle fa-stack-2x"></i>
                                 <i className = "fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span className = "ms-3">More</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <Link to = "/" className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </Link>
            </div>
        </div>
);
}



export default NavigationSidebar;