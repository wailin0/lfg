import React, {useContext, useEffect, useState} from "react";
import '../styles/postcomment.css'
import {FaPaperPlane} from "react-icons/fa";
import axios from "axios";
import Rest from "./Rest";
import Context from "./Context";
import {FaThumbsUp, FaThumbsDown, FaEllipsisV, FaCommentDots} from "react-icons/fa"
import JWTHeader from "./auth/JWTHeader";
import {Link} from "react-router-dom";

const PostComment = (props) => {
    const postId = useContext(Context)

    const [userComment, setUserComment] = useState({
        id: null,
        body: ""
    })

    const sendComment = (e) => {
        if(e) {
            e.preventDefault()
        }
        axios.post(`${Rest}/post/${postId}/comment`, userComment, { headers: JWTHeader() })
            .then(response => {
                props.setComments([...props.comments, response.data])
                setUserComment({body: ""})
                props.setCommentCount(props.commentCount+1)
            })
            .catch(err => console.log(err))
    }



    return (
        <>
        <div className=" card-footer">
            <div className="comment">
                    <form onSubmit={sendComment}>
                <input className="comment-box" value={userComment.body} onChange={e => setUserComment({...userComment, body: e.target.value})} />
                    </form>
                {userComment.body.length>0 && <span id="send-icon"><FaPaperPlane onClick={() => sendComment()} /></span> }
            </div>
        </div>
            { props.comments.map(eachComment => (
                <div className="user-comment-list" key={eachComment.id}>
                    <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png" id="profile-pic" className="user-pic" alt={eachComment.users.username} />
                    <div className="user-comment">
                        <div className="username-comment">
                            <Link to={`/user/${eachComment.users.username}`}> {eachComment.users.username} </Link>
                            <FaEllipsisV />
                        </div>
                        {eachComment.body}
                        <div className="react-comment">
                        <FaThumbsUp /> <FaThumbsDown /> <FaCommentDots />
                        </div>
                    </div>
                </div>
            ))}
            </>
    )
}

export default PostComment