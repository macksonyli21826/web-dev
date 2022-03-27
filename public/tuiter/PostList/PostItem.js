const PostItem = (post) =>{
    const { imageTextHeader, imageTextContent, imageTextLink } = post;
    return (`
        <!-- make avatar and other content left and right display -->
        <div class = "wd-flex">
            <div>
                <img class = "wd-avatar-1 me-3" src = "${post.avatarIcon}">
            </div>
            <div> 
                <div class = "wd-flex wd-space-between">
                    <!-- user's information -->
                    <div class = "wd-flex">
                        <div class = "wd-bold wd-white">
                            ${post.userName}
                        </div>
                        <div class = "ms-1 wd-white">
                            <i class = "fa fa-check-circle"></i>
                        </div>
                        <div class = "ms-1 wd-darkgrey">
                            @${post.handle}
                        </div>
                        <div class = "ms-1 wd-darkgrey">
                            - ${post.time}
                        </div>
                    </div>
                    <!-- three dots -->
                    <div class = "wd-darkgrey me-0"> 
                        <i class = "fa fa-ellipsis-h"></i>
                    </div>
                </div>
                <!-- the main topic that the user texts -->
                <div class = "wd-white">
                    ${post.topic}
                </div>
                <!-- the picture -->
                <div class="card wd-round-corner mt-2 overflow-hidden">
                    <img src="${post.image}" class="card-img-top">
                    
                    <div class="card-body bg-black wd-border-top py-0"> <!-- on y axis make them no padding -->
                        <!-- if there is imageTextHeader, show the imageTextHeader in white with margin top -->
                        <!-- if not, show nothing -->
                        ${imageTextHeader ? (
                            '<div class = "wd-white pt-2">' + imageTextHeader + '</div>'
                        ) : ''}
                        <!-- if there is imageContent, show the content -->
                        <!-- if not, show nothing -->
                        <div class = "wd-darkgrey">
                            ${imageTextContent ? imageTextContent : ''}
                        </div> 
                        <!-- if there is imageTextLink, show the link with icon and margin bottom -->
                        <!-- if not, show nothing -->
                        ${imageTextLink ? ( 
                            '<div class = "wd-darkgrey pb-2"> <i class = "fa fa-link"></i>' + imageTextLink + '</div>'
                        ) : ''}
                        
                    </div>
                </div>
                <div class = "row mt-2 wd-darkgrey">
                    <div class = "col-3">
                        <i class = "fa fa-comment me-3"></i>
                        ${post.commentNum}
                    </div>
                    <div class = "col-3">
                        <i class = "fa fa-retweet me-3"></i>
                        ${post.forwardNum}
                    </div>
                    <div class = "col-3">
                        <i class = "fa fa-heart me-3"></i>
                        ${post.likeNum}
                    </div>
                    <div class = "col-3">
                        <i class = "fa fa-upload"></i>
                    </div>
                </div>
            </div>
            
        </div>
        <hr/>  
    `)
}
export default PostItem;