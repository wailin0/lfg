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
        closePostDeleteModal()
    }

    const {showPostDeleteModal, closePostDeleteModal} = useContext(Context)

    return (
        <>
            <Modal show={showPostDeleteModal.show}
                   onHide={() => closePostDeleteModal()}
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.loading ? <span>Deleting <Spinner animation="grow" size="sm" /></span> : <span>r u sure u wanna do this?</span>}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => deletePost(showPostDeleteModal.postId) }>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={() => closePostDeleteModal()}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PostDeleteModal