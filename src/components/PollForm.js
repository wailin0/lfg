import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PollForm = (props) => {
    return(
        <>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="title" required/>
                </Form.Group>
                <Form.Group>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">1</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                        <InputGroup.Append>
                            <InputGroup.Text>X</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup><InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">2</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                    <InputGroup.Append>
                        <InputGroup.Text>X</InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
                </Form.Group>
                <Button variant="info" size="sm">
                    Add Option
                </Button>
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

export default PollForm