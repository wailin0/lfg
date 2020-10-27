import React, {useContext, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import {useDispatch} from "react-redux";
import { updateAPost} from "../../../reducers/community/PostReducer";
import Context from "../../Context";

const PostEditModal = (props) => {

    const {showPostEditModal, closePostEditModal} = useContext(Context)
    const [title, setTitle] = useState(showPostEditModal.post.title)
    const [body, setBody] = useState(showPostEditModal.post.body)



    const dispatch = useDispatch()

    const editPost = async event => {
        event.preventDefault()
        const updatedPost = {
            id: showPostEditModal.post.id,
            title: title,
            body: body
        }
        await dispatch(updateAPost(updatedPost))
        closePostEditModal()
    }

    return (
        <>
            <Modal show={showPostEditModal.show}
                 onHide={() => closePostEditModal()}
                 centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={editPost}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="title" value={title} name="title"
                                      onChange={event => setTitle(event.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as="textarea" rows="3" name="body" value={body}
                                      onChange={event => setBody(event.target.value)} placeholder="subject (optional)"/>
                    </Form.Group>

                    <Button variant="outline-danger" size="sm">NSFW</Button>{' '}
                    <Button variant="outline-warning" size="sm">Spoiler</Button>{' '}
                    <Button variant="outline-secondary" size="sm">Help</Button>{' '}
                    <Button variant="outline-dark" size="sm">+</Button>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" disabled={!(title && body)}>{props.loading ?
                            <span><Spinner animation="border" variant="light" size="sm"/>Posting</span> :
                            <span>Save</span>}
                        </Button>
                        <Button onClick={() => closePostEditModal()} variant="secondary">Cancel</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default PostEditModal