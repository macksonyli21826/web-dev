import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }) => {return(
        <div>
            <div classNameName="list-group">
                <a classNameName="list-group-item" href="/">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className = {`list-group-item ${active === 'home' ? 'active' : ''}`}
                   href="../HomeScreen/home.html" >
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-home"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Home</span>
                        </div>
                    </div>
                </a>
                <a className = {`list-group-item ${active === 'explore' ? 'active' : ''}`} href="../ExploreScreen/explore.html">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-hashtag"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Explore</span>
                        </div>
                    </div>
                </a>
                <a className = {`list-group-item ${active === 'notification' ? 'active' : ''}`} href = "/">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-bell"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Notifications</span>
                        </div>
                    </div>
                </a>

                <a className = {`list-group-item ${active === 'message' ? 'active' : ''}`} href = "/">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Messages</span>
                        </div>
                    </div>
                </a>
                <a className = {`list-group-item ${active === 'bookmark' ? 'active' : ''}`} href="../bookmark.html">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-bookmark"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Bookmarks</span>
                        </div>
                    </div>
                </a>
                <a className = {`list-group-item ${active === 'list' ? 'active' : ''}`} href = "/">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-list-ul"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Lists</span>
                        </div>
                    </div>
                </a>

                <a className = {`list-group-item ${active === 'profile' ? 'active' : ''}`} href = "/">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fa fa-user-alt"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>Profile</span>
                        </div>
                    </div>
                </a>

                <a className = {`list-group-item ${active === 'more' ? 'active' : ''}`} href = "/">
                    <div className = "row">
                        <div className = "col-2">
                            <span className = "fa-stack start-0">
                                 <i className = "fas fa-circle fa-stack-2x"></i>
                                 <i className = "fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            <span>More</span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>
        </div>
);
}



export default NavigationSidebar;