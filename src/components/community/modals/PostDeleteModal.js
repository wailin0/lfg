import React, {useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import {deleteAPost} from "../../../reducers/community/PostReducer";
import {useDispatch} from "react-redux";
import Context from "../../Context";

const PostDeleteModal = (props) => {

    const dispatch = useDispatch()

    const deletePost = async postId => {
        await dispatch(deleteAPost(postId))
        props.closePostDeleteModal()
    }


    return (
        <>
            <Modal show={props.showPostDeleteModal.show}
                   onHide={() => props.closePostDeleteModal()}
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.loading ? <span>Deleting <Spinner animation="grow" size="sm" /></span> : <span>r u sure u wanna do this?</span>}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => deletePost(props.showPostDeleteModal.postId) }>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={() => props.closePostDeleteModal()}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PostDeleteModal