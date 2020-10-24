import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import '../styles/postform.css'
import Spinner from "react-bootstrap/Spinner";

const PostForm = React.memo(props => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const submitPost = event => {
        event.preventDefault()
        props.addPost(
            {
                title: title,
                body: body
            },
            props.groupId)
        console.log(title + " " + body + " " + props.groupId)
        props.onHide()
    }

    return (
        <>
            <Form onSubmit={submitPost}>
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
                        <span>Post</span>}</Button>
                    <Button onClick={props.onHide} variant="secondary">Cancel</Button>
                </Modal.Footer>
            </Form>
        </>
    )
})

export default PostForm