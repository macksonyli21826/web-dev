const PostSummaryItem = (post) => {
    return(`
        <li class = "list-group-item">
            <div class = "wd-flex wd-space-between">
                <div> <!-- text -->
                    <div class = "wd-darkgrey">
                        ${post.topic}
                    </div>
                    <div class = "wd-flex"> <!-- userName and time as flex -->
                        <div class = "wd-bold">
                            ${post.userName}
                            <i class = "fa fa-check-circle"></i>
                        </div>
                        <div class = "mx-1 wd-darkgrey">
                            - ${post.time}
                        </div>
                    </div>
                    <div class = "wd-bold me-3">
                        ${post.title}
                    </div>
                </div>
                <div> <!-- picture -->
                    <img src="${post.image}" class = "wd-image-1">
                </div>
            </div>
        </li>
    `)
}
export default PostSummaryItem;