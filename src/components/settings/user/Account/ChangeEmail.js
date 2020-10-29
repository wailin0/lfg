import SettingItem from "../../SettingItem";
import {FaLongArrowAltLeft} from "react-icons/fa";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import CSSTransition from "react-transition-group/CSSTransition";
import React from "react";

const ChangeEmail = () => {
    return (
        <div className="menu">
            <SettingItem goToMenu="account" leftIcon={<FaLongArrowAltLeft/>}>
                Change email
            </SettingItem>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control name="email" value="a@a.a"/>
                    <Form.Text className="text-muted">
                        async chekc here
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>provide your password to make changes</Form.Label>
                    <Form.Control name="email" value="a@a.a"/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ChangeEmail