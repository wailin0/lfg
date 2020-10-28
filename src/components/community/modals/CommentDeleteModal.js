import React, {useContext} from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import {deleteAComment} from "../../../reducers/community/CommentReducer";
import Context from "../../Context";
import {useDispatch} from "react-redux";
import axios from "axios";
import Rest from "../../Rest";
import JWTHeader from "../../auth/JWTHeader";

const CommentDeleteModal = (props) => {


    const dispatch = useDispatch()

    const deleteComment = commentId => {
        axios.delete(`${Rest}/comment/${commentId}`, {headers: JWTHeader()})
            .then(() => {
                const deletedState = props.comments.filter(comment => comment.id !== commentId)
                props.setComments(deletedState)
                props.closeCommentDeleteModal()
            })
        // dispatch(deleteAComment(commentId))
        // closeCommentDeleteModal()
    }

    return (
        <Modal show={props.showCommentDeleteModal.show}
               onHide={() => props.closeCommentDeleteModal()}
               centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.loading ? <span>Deleting <Spinner animation="grow" size="sm"/></span> :
                <span>r u sure u wanna do this?</span>}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => deleteComment(props.showCommentDeleteModal.commentId)}>
                    Delete
                </Button>
                <Button variant="primary" onClick={() => props.closeCommentDeleteModal()}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CommentDeleteModal