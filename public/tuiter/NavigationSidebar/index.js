const NavigationSidebar = () => {
    return(`
<!-- start of html -->
<div class="list-group">
    <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i>
    </a>
    <a class="list-group-item" href="home.html">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-home"></i>
            </div>
            <div class = "col-10">
                <span>Home</span>
            </div>
        </div>
    </a>
    <a class="list-group-item" href="explore.html">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-hashtag"></i>
            </div>
            <div class = "col-10">
                <span>Explore</span>
            </div>
        </div>
    </a>
    <a class="list-group-item" href="notification.html">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-bell"></i>
            </div>
            <div class = "col-10">
                <span>Notifications</span>
            </div>
        </div>
    </a>
    <a class="list-group-item" href="message.html">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-envelope"></i>
            </div>
            <div class = "col-10">
                <span>Messages</span>
            </div>
        </div>
    </a>
    <a class="list-group-item" href="bookmark.html">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-bookmark"></i>
            </div>
            <div class = "col-10">
                <span>Bookmarks</span>
            </div>
        </div>
    </a>
    <a class="list-group-item" href="list.html">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-list-ul"></i>
            </div>
            <div class = "col-10">
                <span>Lists</span>
            </div>
        </div>
    </a>
    <a class="list-group-item" href="profile.html">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-user-alt"></i>
            </div>
            <div class = "col-10">
                <span>Profile</span>
            </div>
        </div>
    </a>
    <a class="list-group-item" href="more.html">
        <div class = "row">
            <div class = "col-2">
                <span class = "fa-stack start-0">
                     <i class = "fas fa-circle fa-stack-2x"></i>
                     <i class = "fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class = "col-10">
                <span>More</span>
            </div>
        </div>
    </a>
    
    
    
    
    

</div>
<div class="d-grid mt-2">
    <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
        Tweet
    </a>
</div>
<!-- end of html -->
`);
}
export default NavigationSidebar;