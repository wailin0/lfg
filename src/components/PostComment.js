import React, {useContext, useEffect, useState} from "react";
import '../styles/postcomment.css'
import {FaPaperPlane} from "react-icons/fa";
import axios from "axios";
import Rest from "./Rest";
import PostContext from "./PostContext";
import ListGroup from "react-bootstrap/ListGroup";
import {MdHelp} from "react-icons/md";
import {FiLogOut} from "react-icons/fi";
import Popover from "react-bootstrap/Popover";

const PostComment = () => {
    const postId = useContext(PostContext)
    const [comments, setComments] = useState([])

    const [userComment, setUserComment] = useState({
        id: null,
        body: "",
        userId: 1,
        postId: postId
    })

    const sendComment = () => {
        setUserComment({
            ...userComment, body: userComment.body
        })
        axios.post(`${Rest}/comment/`, userComment)
            .then(response => {
                setComments(prevComments =>
                    [...prevComments, {id:response.data.id, ...userComment}])
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${Rest}/comment/post/${postId}`)
            .then(response => {
                setComments(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])


    return (
        <>
            { comments.map(eachComment => (

                <ListGroup key={eachComment.id}>
                    <ListGroup.Item> {eachComment.body}</ListGroup.Item>
                </ListGroup>
            ))}
        <div className="card-footer">
            <div className="comment">
                <img
                    src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                    id="avatar"/>
                <input className="comment-box" value={userComment.body} onChange={e => setUserComment({...userComment, body: e.target.value})} />
                {userComment.body.length>0 && <span id="send-icon"><FaPaperPlane onClick={() => sendComment()} /></span> }
            </div>
        </div>
            </>
    )
}

export default PostComment