import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";

const MediaForm = (props) => {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="title" required/>
                </Form.Group>
                <Form.Group>
                    <Form.File placeholder="upload a file" required/>
                </Form.Group>
                <Button variant="outline-danger" size="sm">NSFW</Button>{' '}
                <Button variant="outline-warning" size="sm">Spoiler</Button>{' '}
                <Button variant="outline-secondary" size="sm">Help</Button>{' '}
                <Button variant="outline-dark" size="sm">+</Button>
                <Modal.Footer>
                    <Button variant="primary">Post</Button>
                    <Button onClick={props.onHide} variant="secondary">Cancel</Button>
                </Modal.Footer>
            </Form>
        </>
    )
}

export default MediaForm