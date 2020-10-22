import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import axios from "axios"
import Rest from "../Rest";
import {useHistory} from "react-router-dom";
import JWTHeader from "../auth/JWTHeader";

const CommunityRegModel = (props) => {
    const [form, setForm] = useState({
        id: null,
        name: '',
        topic: '',
        description: '',
        type: ''
    })
    const history = useHistory()
    const createCommunity = event => {
        event.preventDefault()
        const formData = {
            name: form.name,
            topic: form.topic,
            description: form.description,
            type: form.type
        }
        axios.post(`${Rest}/group`, formData, {headers: JWTHeader()})
            .then(() => {
                history.push('/community/' + form.name)
            }).catch(err => {
            console.log("community name already exist")
        })
    }

    return (
        <Modal
            {...props}
            size="md"
            backdrop="static"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form onSubmit={createCommunity}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create a community
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={form.name}
                                      onChange={e => setForm({...form, name: e.target.value})}/>
                        <Form.Text className="text-muted">
                            give it something unique, you can change it later
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Topic</Form.Label>
                        <Form.Control type="text" name="topic" value={form.topic}
                                      onChange={e => setForm({...form, topic: e.target.value})}/>
                        <Form.Text className="text-muted">
                            what kind of community is it?
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={form.description}
                                      onChange={e => setForm({...form, description: e.target.value})}/>
                        <Form.Text className="text-muted">
                            explain what your community is about
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Community type</Form.Label>
                        <Form.Check
                            type="radio"
                            label="public"
                            name="type"
                            id="formHorizontalRadios1"
                            onChange={e => setForm({...form, type: 'public'})}
                        />
                        <Form.Check
                            type="radio"
                            label="restricted"
                            name="type"
                            id="formHorizontalRadios2"
                            onChange={e => setForm({...form, type: 'restricted'})}
                        />
                        <Form.Check
                            type="radio"
                            label="private"
                            name="type"
                            id="formHorizontalRadios3"
                            onChange={e => setForm({...form, type: 'private'})}
                        />
                    </Form.Group>

                    {/*<Form.Group>*/}
                    {/*    <Form.Label>Adult content</Form.Label>*/}
                    {/*    <Form.Check type="checkbox" label="18+ year old community"/>*/}
                    {/*</Form.Group>*/}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={props.onHide}>Cancel</Button>
                    <Button type="submit" variant="outline-info"
                            disabled={!(form.name.trim() && form.topic.trim() && form.description.trim() && form.type)}>Create
                        Community</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default CommunityRegModel