import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useDispatch} from "react-redux";
import {createAMediaPost, createAPost} from "../reducers/community/PostReducer";

const MediaForm = (props) => {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const submitPost = async event => {
        event.preventDefault()
        const file = document.querySelector("input[type=file]").files[0];
        const newMediaPost = new FormData()
        newMediaPost.append("title", title);
        newMediaPost.append("file", file)
        await dispatch(createAMediaPost(props.groupId, newMediaPost))
        props.onHide()
    }

    return (
        <>
            <Form onSubmit={submitPost}>
                <Form.Group>
                    <Form.Control type="text" placeholder="title" name="title" value={title} onChange={e => setTitle(e.target.value)} required/>
                </Form.Group>
                <Form.Group>
                    <Form.File placeholder="upload a file" required/>
                </Form.Group>
                <Button variant="outline-danger" size="sm">NSFW</Button>{' '}
                <Button variant="outline-warning" size="sm">Spoiler</Button>{' '}
                <Button variant="outline-secondary" size="sm">Help</Button>{' '}
                <Button variant="outline-dark" size="sm">+</Button>
                <Modal.Footer>
                    <Button type="submit" variant="primary" disabled={!(title)}>Post</Button>
                    <Button onClick={props.onHide} variant="secondary">Cancel</Button>
                </Modal.Footer>
            </Form>
        </>
    )
}

export default MediaForm