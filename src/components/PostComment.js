import React from "react";

const PostComment = () => {
    return (
        <div className="card-footer">
            Comment
            <div className="comment">
                <img
                    src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                    id="avatar"/>
                <input className="form-control comment-box " aria-label="With textarea"></input>
            </div>
        </div>
    )
}

export default PostComment