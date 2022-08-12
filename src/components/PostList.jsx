import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    return (
        <div>
            {posts.map((item, index) =>
                <PostItem key={index + 1} props={item} />
            )}
        </div>
    )
}

export default PostList;