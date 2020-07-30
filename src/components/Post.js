import React from "react";
import {FaClock} from "react-icons/fa";
import PostReact from "./PostReact";
import PostComment from "./PostComment";
import PostTag from "./PostTag";
import '../styles/post.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Spinner from "react-bootstrap/Spinner";

const Post = (props) => {


    return(
        <>
            { props.loading ? <span id="loading">Loading feeds... <br/><Spinner animation="grow" variant="danger" /></span> :
                props.posts.map((eachPost) => (
                    <div key={eachPost.id}>
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mr-2">
                                        <img id="avatar" width="45" src="https://picsum.photos/50/50"
                                             alt=""/>
                                    </div>
                                    <div className="ml-2">
                                        <div className="h5 m-0">Wai Lin</div>
                                        <div className="text-muted  mb-2"><FaClock /> 10 min ago
                                        </div>
                                    </div>
                                </div>
                                <div>
                                        <DropdownButton drop='left'>
                                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item onClick={() => props.setShowDeleteModal(true)}>Delete</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-3">Hide</Dropdown.Item>
                                        </DropdownButton>
                                </div>
                            </div>

                        </div>
                    <div className="card-body">
                        <h5 className="card-title" > {eachPost.title} </h5>
                        <hr/>
                        <p className="card-text">
                            {eachPost.body}

                        </p>
                        <PostTag />
                    </div>

                        <PostReact
                            postId={eachPost.id}
                            posts={props.posts}
                            currentPost={eachPost}
                            postId={eachPost.id}
                            setPosts={props.setPosts}
                        />

                </div>
                    <br/>
                        <Modal show={props.showDeleteModal}
                               onHide={() => props.setShowDeleteModal(false)} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{props.loading ? <span>Deleting <Spinner animation="grow" size="sm" /></span> : <span>r u sure u wanna do this?</span>}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => props.deletePost(eachPost.id) }>
                                    Delete
                                </Button>
                                <Button variant="primary" onClick={() => props.setShowDeleteModal(false)}>
                                    Cancel
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                ))
            }

        </>
    )
}

export default Post