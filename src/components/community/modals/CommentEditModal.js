import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import React from "react";
import axios from "axios";
import Rest from "../../Rest";
import JWTHeader from "../../auth/JWTHeader";

const CommentEditModal = (props) => {

    const editComment = (e) => {
        e.preventDefault()
        const editedComment = {
            id: props.showCommentEditModal.comment.id,
            body: props.body
        }
        axios.put(`${Rest}/comment/${editedComment.id}`, editedComment, {headers: JWTHeader()})
            .then(res => {
                const updatedComment = props.comments.map(comment => comment.id === res.data.id ? res.data : comment)
                props.setComments(updatedComment)
                console.log(res.data)
                props.closeCommentEditModal()
            })
    }

    return (
        <Modal show={props.showCommentEditModal.show}
               onHide={() => props.closeCommentEditModal()}
               centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={editComment}>
                    <Form.Group>
                        <Form.Control as="textarea" rows="3" name="body" value={props.body}
                                      onChange={event => props.setBody(event.target.value)}
                                      placeholder="subject (optional)"/>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" disabled={!(props.body)}>{props.loading ?
                            <span><Spinner animation="border" variant="light" size="sm"/>Posting</span> :
                            <span>Save</span>}
                        </Button>
                        <Button onClick={() => props.closeCommentEditModal()} variant="secondary">Cancel</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default CommentEditModal