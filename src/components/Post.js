import React, {useContext, useEffect, useState} from "react";
import {FaClock} from "react-icons/fa";
import PostReact from "./PostReact";
import PostTag from "./PostTag";
import '../styles/post.css'
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Spinner from "react-bootstrap/Spinner";
import Context from "./Context";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PostDeleteModal from "./community/modals/PostDeleteModal";
import PostEditModal from "./community/modals/PostEditModal";
import {deleteAPost, getPosts, updateAPost} from "../reducers/community/PostReducer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Post = (props) => {
    const posts = useSelector(state => state.posts)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const [showPostDeleteModal, setShowPostDeleteModal] = useState({
        show: false,
        postId: null
    });
    const openPostDeleteModal = (postId) => {
        setShowPostDeleteModal({show: true, postId})
    }
    const closePostDeleteModal = () => {
        setShowPostDeleteModal({})
    }


    const [showPostEditModal, setShowPostEditModal] = useState({
        show: false,
        post: null
    });
    const openPostEditModal = (post) => {
        setShowPostEditModal({show: true, post})
        setTitle(post.title)
        setBody(post.body)
    }
    const closePostEditModal = () => {
        setShowPostEditModal({})
    }


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])


    const {user} = useContext(Context)

    return (
        <>
            {props.loading ?
                <span id="loading"><Spinner animation="grow" variant="danger"/> Loading feeds... <br/>please wait for backend server to start</span> :
                posts.map((eachPost) => (
                    <div key={eachPost.id} className="post">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="mr-2">
                                            <img id="avatar" width="45" src="https://picsum.photos/50/50"
                                                 alt=""/>
                                        </div>
                                        <div className="ml-2">
                                            <div className="h5 m-0">
                                                <Link
                                                    to={`/user/${eachPost.users.username}`}>{eachPost.users.username}</Link>
                                                <span className="text-muted ml-3 small"><FaClock/> 10 min ago</span>
                                                <div id="group-name">
                                                    Posted to <Link
                                                    to={`/community/${eachPost.groups.name}`}>{eachPost.groups.name}</Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div>
                                        <DropdownButton drop='left'>
                                            {(user && eachPost.users.id === user.id) &&
                                            <>
                                                <Dropdown.Item
                                                    onClick={() => openPostEditModal(eachPost)}>Edit</Dropdown.Item>
                                                <Dropdown.Item
                                                    onClick={() => openPostDeleteModal(eachPost.id)}>Delete</Dropdown.Item>
                                            </>
                                            }
                                            {(user && eachPost.users.id !== user.id) &&
                                            <>
                                                <Dropdown.Item>
                                                    <Link
                                                        to={`/user/${eachPost.users.username}`}>Visit {eachPost.users.username} </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Hide</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
                                            </>
                                            }
                                        </DropdownButton>
                                    </div>
                                </div>

                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> {eachPost.title} </h5>
                                <hr/>
                                <p className="card-text">
                                    {eachPost.body}

                                </p>
                                <PostTag/>
                            </div>

                            <Context.Provider value={{postId: eachPost.id, user}}>
                                <PostReact
                                    posts={props.posts}
                                    currentPost={eachPost}
                                    postId={eachPost.id}
                                    setPosts={props.setPosts}
                                />
                            </Context.Provider>

                        </div>
                    </div>

                ))
            }

            <PostDeleteModal showPostDeleteModal={showPostDeleteModal}
                             closePostDeleteModal={closePostDeleteModal}
            />

            <PostEditModal showPostEditModal={showPostEditModal}
                           closePostEditModal={closePostEditModal}
                           title={title} setTitle={setTitle}
                           body={body} setBody={setBody}
            />
        </>
    )
}

export default Post