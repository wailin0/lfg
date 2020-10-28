import React, {useContext, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import {useDispatch} from "react-redux";
import {updateAPost} from "../../../reducers/community/PostReducer";
import Context from "../../Context";

const PostEditModal = (props) => {




    const dispatch = useDispatch()

    const editPost = async event => {
        event.preventDefault()
        const updatedPost = {
            id: props.showPostEditModal.post.id,
            title: props.title,
            body: props.body
        }
        await dispatch(updateAPost(updatedPost))
        props.closePostEditModal()
    }


    return (
        <>
            <Modal show={props.showPostEditModal.show}
                 onHide={() => props.closePostEditModal()}
                 centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={editPost}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="title" value={props.title} name="title"
                                      onChange={event => props.setTitle(event.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" rows="3" name="body" value={props.body}
                                      onChange={event => props.setBody(event.target.value)} placeholder="subject (optional)"/>
                    </Form.Group>

                    <Button variant="outline-danger" size="sm">NSFW</Button>{' '}
                    <Button variant="outline-warning" size="sm">Spoiler</Button>{' '}
                    <Button variant="outline-secondary" size="sm">Help</Button>{' '}
                    <Button variant="outline-dark" size="sm">+</Button>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" disabled={!(props.title && props.body)}>{props.loading ?
                            <span><Spinner animation="border" variant="light" size="sm"/>Posting</span> :
                            <span>Save</span>}
                        </Button>
                        <Button onClick={() => props.closePostEditModal()} variant="secondary">Cancel</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default PostEditModal