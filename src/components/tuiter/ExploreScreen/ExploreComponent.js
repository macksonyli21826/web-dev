import React from "react"
import PostSummaryList from "../PostSummaryList/index.js";
import {Link} from "react-router-dom"
const ExploreComponent = () => {
    return (
        <div>
            <div className = "row">
                <div className = "col-11 wd-flex">
                    <i className = "fa fa-search wd-magnify"></i>
                        <input type = "text" className = "form-control wd-search-bar" placeholder = "Search Twitter"/>
                </div>
                <div className = "col-1">
                    <Link to = "/">
                        <i className = "fa fa-cog fa-2x me-0"></i>
                    </Link>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <Link to = "/" className="nav-link active" >For you</Link>
                </li>
                <li className="nav-item">
                    <Link to = "/" className="nav-link" >Trending</Link>
                </li>
                <li className="nav-item">
                    <Link to = "/" className="nav-link" >News</Link>
                </li>
                <li className="nav-item">
                    <Link to = "/" className="nav-link"  tabindex="-1">Sports</Link>
                </li>
                <li className="nav-item d-none d-sm-block">
                    <Link to = "/" className="nav-link" >Entertainment</Link>
                </li>
            </ul>
            <div className = "wd-container">
                <img src = "/images/spacex-starship.jpg" style = {{width: "100%",}} alt = "starship"/>
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

