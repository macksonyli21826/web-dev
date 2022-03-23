import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class = "row">
            <!-- search field and cog -->
            <div class = "col-11 wd-flex">
                <i class = "fa fa-search wd-magnify"></i>
                    <input type = "text" class = "form-control wd-search-bar" placeholder = "Search Twitter">
            </div>
            <div class = "col-1">
                <a href = "explore-settings.html">
                    <i class = "fa fa-cog fa-2x me-0"></i>
                </a>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <!-- tabs -->
            <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1">Sports</a>
            </li>
            <li class="nav-item d-none d-sm-block">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class = "wd-container">
            <img src = "../../images/spacex-starship.jpg" style = "width: 100%;">
            <div class = "wd-bottom-left wd-large-text">SpaceX's Starship</div>
        </div>
        <div class = "mt-2">
            ${PostSummaryList()}
        </div>    
`);}

export default ExploreComponent;

