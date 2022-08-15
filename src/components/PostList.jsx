import React from "react";
import { useState } from "react";
import PostItem from "./PostItem";

const PostList = ({ props }) => {
    const arrPostItem = []
    
    const SortArr = (arr) => {
        arr.sort((a, b) => {
            if (a.dt_txt.slice(11, 19) == "12:00:00") {
                arrPostItem.push(a);   
            }
        })
    }
    SortArr(props)
  
    return (
        <div className="postList">
            {arrPostItem.map((item, index) =>
                <PostItem key={index + 1} props={item}/>
            )}
        </div>
    )

}

export default PostList;