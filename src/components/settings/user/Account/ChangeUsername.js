import SettingItem from "../../SettingItem";
import {FaLongArrowAltLeft} from "react-icons/fa";
import Form from "react-bootstrap/Form";
import {Button, Card} from "react-bootstrap";
import CSSTransition from "react-transition-group/CSSTransition";
import React from "react";

const ChangeUsername = () => {
    return (
        <div className="menu">
            <SettingItem goToMenu="account" leftIcon={<FaLongArrowAltLeft/>}>
                Change user name
            </SettingItem>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>user name</Form.Label>
                    <Form.Control name="username" value="user"/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Card>
                    <Card.Body>
                        <Card.Title>Notice!</Card.Title>
                        <Card.Text>
                            User name is unique and you can only change once a week
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ChangeUsername