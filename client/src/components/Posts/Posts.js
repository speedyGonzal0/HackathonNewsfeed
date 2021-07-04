import React from 'react'
import "./Posts.css"
import SinglePost from "../SinglePost/SinglePost"

function Posts() {
    return (
        <div className="posts">
            <div className="title"><h1>My feed</h1></div>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
            <SinglePost/>
        </div>
    )
}

export default Posts