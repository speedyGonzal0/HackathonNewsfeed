import React from 'react'
import './SinglePost.css'

function SinglePost() {
    return (
        <div className="SinglePost">
            <div className="postInfo">
                <div className="postTitle">
                    First Post
                </div>
                <div className="postCats">
                    <span className="postCat">#Java</span>
                    <span className="postCat">#Python</span>
                </div>
                <div className="postDate">
                    1Hr ago
                </div>
                <p className="postDesc">
                    sodajnsodlhwoiduhnaslkdowijhdasd
                    asldjnawoidjhasdjowijdoaisjd
                    asoldjowijdaosihdowhdalskjdoijwd
                </p>
            </div>
            <div className="postImg">
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"
                    alt="" className="postImg" />
            </div>
        </div>
    )
}

export default SinglePost