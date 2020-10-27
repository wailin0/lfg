import React, {useCallback, useContext, useState} from "react";
import {FaClock} from "react-icons/fa";
import PostReact from "./PostReact";
import PostTag from "./PostTag";
import '../styles/post.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Spinner from "react-bootstrap/Spinner";
import Context from "./Context";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteAPost} from "../reducers/community/PostReducer";
import PostDeleteModal from "./community/modals/PostDeleteModal";
import PostEditModal from "./community/modals/PostEditModal";

const Post = (props) => {
    const posts = useSelector(state => state.posts)

    const {showPostDeleteModal, showPostEditModal,
           openPostEditModal, openPostDeleteModal} = useContext(Context)

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
                                                >
                                                <Link
                                                    to={`/community/${eachPost.groups.name}`}>{eachPost.groups.name}</Link>
                                            </div>
                                            <div className="text-muted  mb-2"><FaClock/> 10 min ago
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <DropdownButton drop='left'>
                                            <Dropdown.Item
                                                onClick={() => openPostEditModal(eachPost)}>Edit</Dropdown.Item>
                                            <Dropdown.Item
                                                onClick={() => openPostDeleteModal(eachPost.id)}>Delete</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Hide</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
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

                            <Context.Provider value={eachPost.id}>
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
            {showPostDeleteModal.show && <PostDeleteModal  />}
            {showPostEditModal.show && <PostEditModal  /> }
        </>
    )
}

export default Post