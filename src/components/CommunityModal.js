import React from 'react'
import '../styles/modal.css'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from 'react-bootstrap/FormControl'

const CommunityModal = (props) => {
    return (
        <div>

            <Modal {...props} size="lg" centered >
                <Modal.Body>
                <Tabs defaultActiveKey="post" transition={false}>
                    <Tab eventKey="post" title="Post">
                        <br/>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="title" required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="textarea" rows="3" placeholder="subject (optional)" required/>
                            </Form.Group>
                        </Form>
                    </Tab>
                    <Tab eventKey="media" title="Media">
                        <br/>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="title" required/>
                            </Form.Group>
                            <Form.Group>
                                <Form.File placeholder="upload a file" required/>
                            </Form.Group>
                        </Form>
                    </Tab>
                    <Tab eventKey="poll" title="Poll">
                        <br/>
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
                        </Form>
                        <br/>
                    </Tab>
                </Tabs>



                                    <Button variant="outline-danger" size="sm">NSFW</Button>{' '}
                                    <Button variant="outline-warning" size="sm">Spoiler</Button>{' '}
                                    <Button variant="outline-secondary" size="sm">Help</Button>{' '}
                                    <Button variant="outline-dark" size="sm">+</Button>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary">Post</Button>
                                <Button onClick={props.onHide} variant="secondary">Close</Button>
                            </Modal.Footer>



            </Modal>

        </div>
    )
}
export default CommunityModal