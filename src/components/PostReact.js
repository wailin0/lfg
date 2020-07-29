import React from "react";
import {FaCommentDots, FaShare, FaThumbsDown, FaThumbsUp} from "react-icons/fa";

const PostReact = (props) => {


    return (
        <div className=" mx-auto justify-content-between">
            {props.likes} <button id="react-button"  >
            <FaThumbsUp />
        </button>
            {props.dislikes} <button id="react-button">
            <FaThumbsDown />
        </button>
            {props.comments} <button id="react-button">
            <FaCommentDots />
        </button>
            {props.shares} <button id="react-button">
            <FaShare />
        </button>
        </div>
    )
}

export default PostReact