const NavigationSidebar = () => {
    return(`
<!-- start of html -->
<div class="list-group">
    <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i>
    </a>
    <a class="list-group-item" href="../HomeScreen/home.html" >
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-home"></i>
            </div>
            <div class = "col-10 d-none d-xl-block">
                <span>Home</span>
            </div>
        </div>
    </a>
    <a class="list-group-item" href="../ExploreScreen/explore.html">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-hashtag"></i>
            </div>
            <div class = "col-10 d-none d-xl-block">
                <span>Explore</span>
            </div>
        </div>
    </a>
    <a class="list-group-item">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-bell"></i>
            </div>
            <div class = "col-10 d-none d-xl-block">
                <span>Notifications</span>
            </div>
        </div>
    </a>
    <a class="list-group-item">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-envelope"></i>
            </div>
            <div class = "col-10 d-none d-xl-block">
                <span>Messages</span>
            </div>
        </div>
    </a>
    <a class="list-group-item" href="../bookmark.html">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-bookmark"></i>
            </div>
            <div class = "col-10 d-none d-xl-block">
                <span>Bookmarks</span>
            </div>
        </div>
    </a>
    <a class="list-group-item">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-list-ul"></i>
            </div>
            <div class = "col-10 d-none d-xl-block">
                <span>Lists</span>
            </div>
        </div>
    </a>
    <a class="list-group-item">
        <div class = "row">
            <div class = "col-2">
                <i class="fa fa-user-alt"></i>
            </div>
            <div class = "col-10 d-none d-xl-block">
                <span>Profile</span>
            </div>
        </div>
    </a>
    <a class="list-group-item">
        <div class = "row">
            <div class = "col-2">
                <span class = "fa-stack start-0">
                     <i class = "fas fa-circle fa-stack-2x"></i>
                     <i class = "fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <div class = "col-10 d-none d-xl-block">
                <span>More</span>
            </div>
        </div>
    </a>
</div>
<div class="d-grid mt-2">
    <a class="btn btn-primary btn-block rounded-pill">
        Tweet
    </a>
</div>

<script>
    // works for those without link href
    $(".list-group a").on("click", function(){
       $(".list-group a").removeClass("active");
       $(this).addClass("active");
    });
    
    // works for those with link href
    $(document).ready(function() {
        currentPage();
    });
    
    function currentPage() {
        // path = xxx.html, which is where we are now
        const path = $(location).attr('href').split('/').slice(-1).join('');
        // href = the reference written on the button 
        $(".list-group a").each(function () {
            const href = $(this).attr('href');
            if(href && href.includes(path)){
                $(this).addClass("active");
            };
        });
    };
</script>

<!-- end of html -->
`);
}



export default NavigationSidebar;