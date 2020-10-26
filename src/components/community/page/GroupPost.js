import React, {useEffect} from "react";
import {FaClock} from "react-icons/fa";
import PostReact from "../../PostReact";
import PostTag from "../../PostTag";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Spinner from "react-bootstrap/Spinner";
import Context from "../../Context";
import {Link} from "react-router-dom";
import {deleteAPost, getPostsFromAGroup} from "../../../reducers/community/PostReducer";
import {useDispatch, useSelector} from "react-redux";

const GroupPost = (props) => {

    const groupPosts = useSelector(state => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsFromAGroup(props.groupId))
    },[])

    return(
        <>

            { props.loading ? <span id="loading"><Spinner animation="grow" variant="danger" /> Loading feeds... <br/>please wait for backend server to start</span> :
                 groupPosts.map((eachPost) => (
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
                                                <Link to={`/user/${eachPost.users.username}`}>{eachPost.users.username}</Link>
                                            </div>
                                            <div className="text-muted  mb-2"><FaClock /> 10 min ago
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <DropdownButton drop='left'>
                                            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                            <Dropdown.Item onClick={() => props.setShowDeleteModal(true)}>Delete</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Hide</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Report</Dropdown.Item>
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

                            <Context.Provider value={eachPost.id} >
                                <PostReact
                                    posts={props.posts}
                                    currentPost={eachPost}
                                    postId={eachPost.id}
                                    setPosts={props.setPosts}
                                />
                            </Context.Provider>

                        </div>
                        <br/>
                        <Modal show={props.showDeleteModal}
                               onHide={() => props.setShowDeleteModal(false)} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete Post</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>{props.loading ? <span>Deleting <Spinner animation="grow" size="sm" /></span> : <span>r u sure u wanna do this?</span>}</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => deleteAPost(eachPost.id) }>
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

export default GroupPost