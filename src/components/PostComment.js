import React, {useContext, useEffect, useState} from "react";
import '../styles/postcomment.css'
import {FaCommentDots, FaPaperPlane, FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import axios from "axios";
import Rest from "./Rest";
import Context from "./Context";
import JWTHeader from "./auth/JWTHeader";
import {Link} from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {useDispatch, useSelector} from "react-redux";
import CommentDeleteModal from "./community/modals/CommentDeleteModal";
import CommentEditModal from "./community/modals/CommentEditModal";
import {Spinner} from "react-bootstrap";

const PostComment = (props) => {
    const {postId} = useContext(Context)
    const user = useSelector(state => state.user)
    // const comments = useSelector(state => state.comments)
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    const [showCommentDeleteModal, setShowCommentDeleteModal] = useState({
        show: false,
        commentId: null
    });
    const openCommentDeleteModal = (commentId) => {
        setShowCommentDeleteModal({show: true, commentId})
    }
    const closeCommentDeleteModal = () => {
        setShowCommentDeleteModal({})
    }


    const [showCommentEditModal, setShowCommentEditModal] = useState({
        show: false,
        comment: null
    });
    const closeCommentEditModal = () => {
        setShowCommentEditModal({})
    }


    const dispatch = useDispatch()


    useEffect(() => {
        setLoading(true)
        axios.get(`${Rest}/post/${postId}/comment`, {headers: JWTHeader()})
            .then(response => {
                setComments(response.data)
                props.setCommentCount(response.data.length)
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
            })
        // dispatch(getCommentFromAPost(postId))
    }, [])

    const [userComment, setUserComment] = useState({
        id: null,
        body: ""
    })

    const sendComment = (e) => {
        e && e.preventDefault()
        axios.post(`${Rest}/post/${postId}/comment`, userComment, {headers: JWTHeader()})
            .then(response => {
                setComments([...comments, response.data])
                setUserComment({body: ""})
                props.setCommentCount(props.commentCount + 1)
            })
            .catch(err => console.log(err))
        // dispatch(createAComment(postId, userComment))
        // setUserComment({body: ""})
        // props.setCommentCount(props.commentCount + 1)
    }

    const [body, setBody] = useState('')


    const openCommentEditModal = (comment) => {
        setShowCommentEditModal({show: true, comment})
        setBody(comment.body)
    }

    return (<>
        {loading ?
            <div className="comment-loading-icon">
                <Spinner animation="border" variant="secondary" size="sm"/>
                <b>loading comment...</b>
            </div>
            :
            <>
                <div className=" card-footer">
                    <div className="comment">
                        <form onSubmit={sendComment}>
                            <input className="comment-box" value={userComment.body}
                                   onChange={e => setUserComment({...userComment, body: e.target.value})}/>
                        </form>
                        {userComment.body.length > 0 &&
                        <span id="send-icon"><FaPaperPlane onClick={() => sendComment()}/></span>}
                    </div>
                </div>
                {comments.map(eachComment => (
                    <div className="user-comment-list" key={eachComment.commentId}>
                        <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                             id="profile-pic" className="user-pic" alt={eachComment.user.username}/>
                        <div className="user-comment">
                            <div className="username-comment">
                                <Link to={`/user/${eachComment.user.username}`}> {eachComment.user.username} </Link>

                                <DropdownButton drop='left'>
                                    {(user && eachComment.user.userId === user.userId) &&
                                    <>
                                        <Dropdown.Item
                                            onClick={() => openCommentEditModal(eachComment)}>Edit</Dropdown.Item>
                                        <Dropdown.Item
                                            onClick={() => openCommentDeleteModal(eachComment.commentId)}>Delete</Dropdown.Item>
                                    </>
                                    }
                                    {(user && eachComment.user.userId !== user.userId) &&
                                    <>
                                        <Dropdown.Item>
                                            <Link
                                                to={`/user/${eachComment.user.username}`}>Visit {eachComment.user.username} </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Hide</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
                                    </>
                                    }
                                </DropdownButton>

                            </div>
                            {eachComment.body}
                            <div className="react-comment">
                                <FaThumbsUp/> <FaThumbsDown/> <FaCommentDots/>
                            </div>
                        </div>
                    </div>
                ))}

                <CommentDeleteModal showCommentDeleteModal={showCommentDeleteModal}
                                    closeCommentDeleteModal={closeCommentDeleteModal}
                                    comments={comments} setComments={setComments}
                                    commentCount={props.commentCount} setCommentCount={props.setCommentCount}
                />

                <CommentEditModal showCommentEditModal={showCommentEditModal}
                                  closeCommentEditModal={closeCommentEditModal}
                                  body={body} setBody={setBody}
                                  comments={comments} setComments={setComments}
                />
            </>
        }
    </>)
}

export default PostComment