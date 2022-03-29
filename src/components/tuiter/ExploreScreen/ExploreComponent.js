import React from "react"
import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return (
        <div>
            <div className = "row">
                <div className = "col-11 wd-flex">
                    <i className = "fa fa-search wd-magnify"></i>
                        <input type = "text" className = "form-control wd-search-bar" placeholder = "Search Twitter"/>
                </div>
                <div className = "col-1">
                    <a href = "/">
                        <i className = "fa fa-cog fa-2x me-0"></i>
                    </a>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" tabindex="-1">Sports</a>
                </li>
                <li className="nav-item d-none d-sm-block">
                    <a className="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            <div className = "wd-container">
                <img src = "/images/spacex-starship.jpg" style = {{width: "100%",}}/>
                <div className = "wd-bottom-left wd-large-text">
                    SpaceX's Starship
                </div>
            </div>
            <div className = "mt-2">
                <PostSummaryList/>
            </div>
        </div>
    )
}
export default ExploreComponent;

