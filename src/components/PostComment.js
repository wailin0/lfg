import React, {useContext, useEffect, useState} from "react";
import '../styles/postcomment.css'
import {FaPaperPlane} from "react-icons/fa";
import axios from "axios";
import Rest from "./Rest";
import Context from "./Context";
import ListGroup from "react-bootstrap/ListGroup";
import {MdHelp} from "react-icons/md";
import {FiLogOut} from "react-icons/fi";
import Popover from "react-bootstrap/Popover";
import JWTHeader from "./auth/JWTHeader";

const PostComment = () => {
    const postId = useContext(Context)
    const [comments, setComments] = useState([])

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
                setComments([...comments, response.data])
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${Rest}/post/${postId}/comment`, { headers: JWTHeader() })
            .then(response => {
                setComments(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])


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
            { comments.map(eachComment => (

                <ListGroup key={eachComment.id}>
                    <ListGroup.Item>{eachComment.users.username} > {eachComment.body}</ListGroup.Item>
                </ListGroup>
            ))}
            </>
    )
}

export default PostComment