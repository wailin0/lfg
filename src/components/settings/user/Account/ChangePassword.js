import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import React from "react";
import SettingItem from "../../SettingItem";
import {FaLongArrowAltLeft} from "react-icons/fa";
import CSSTransition from "react-transition-group/CSSTransition";

const ChangePassword = () => {
    return (
        <div className="menu">
            <SettingItem goToMenu="account" leftIcon={<FaLongArrowAltLeft/>}>
                Change password
            </SettingItem>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your old password</Form.Label>
                    <Form.Control name="password" value="a@a.a"/>
                    <Form.Text>
                        async chekc here
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>New password</Form.Label>
                    <Form.Control name="password" value="a@a.a"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Retype new password</Form.Label>
                    <Form.Control name="password" value="a@a.a"/>
                    <Form.Text>
                        validation here
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default ChangePassword