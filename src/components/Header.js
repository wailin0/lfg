import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from 'react-bootstrap/FormControl'
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCog, faQuestionCircle, faUsers, faGamepad, faUserFriends, faPlusCircle, faComments,
faSignOutAlt, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import '../styles/header.css'
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/cjs/Dropdown";


const Header = () => (
    <div>
        <Navbar bg="dark"  variant="dark">
            <Navbar.Brand href="#home">FLG</Navbar.Brand>

            <Navbar className="m-auto">
                <Nav>
                    <Nav.Link href="#group"><FontAwesomeIcon icon={faUsers} size='2x' id="icon-button" /></Nav.Link>
                    <Nav.Link href="#party"><FontAwesomeIcon icon={faGamepad} size='2x' id="icon-button" /></Nav.Link>
                    <Nav.Link href="#friend"><FontAwesomeIcon icon={faUserFriends} size='2x' id="icon-button" /></Nav.Link>
                </Nav>
            </Navbar>
            <Navbar >
                <Nav>
                    <Nav.Link href="#group"><FontAwesomeIcon icon={faPlusCircle} size='2x' id="icon-button" /></Nav.Link>
                    <Nav.Link href="#group"><FontAwesomeIcon icon={faComments} size='2x' id="icon-button" /></Nav.Link>
                </Nav>
            </Navbar>
                    <Dropdown id="profile">
                <Dropdown.Toggle id="profile">
                    <Image src="images/favicon.png" width="40" roundedCircle />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><FontAwesomeIcon icon={faUserAlt} /> Wai Lin</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-1"><FontAwesomeIcon icon={faCog} /> Setting</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2"><FontAwesomeIcon icon={faQuestionCircle} /> Help & Support</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2"> Dark Mode</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3"><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
    </div>
)

export default Header