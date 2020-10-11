import React, {useContext, useEffect, useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ListGroup from "react-bootstrap/ListGroup";
import '../styles/userpanel.css'
import {FiLogOut} from 'react-icons/fi'
import {FaCloudMoon, FaCog} from 'react-icons/fa'
import {MdHelp } from 'react-icons/md'
import {Link} from "react-router-dom";
import Logout from "./pages/Logout";
import axios from "axios"
import Rest from "./Rest";
import JWTHeader from "./auth/JWTHeader";
import Form from "react-bootstrap/Form"
import Context from "./Context";

const UserPanel = () => {

    const [darkMode, setDarkMode] = useState(false)
    const [username, setUsername] = useState("")

    const {auth} = useContext(Context);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        axios.get(`${Rest}/auth/user/userInfo`, { headers: JWTHeader() })
            .then(response => {
                setUsername(response.data.username)
            })
            .catch(error => console.log(error))
    },[])

    return (
        <div>
            { auth ?
                <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    rootClose
                    overlay={
                        <Popover>
                            <Popover.Title as="h3"><img
                                src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"/>
                                {username} <br/>view your profile</Popover.Title>

                            <ListGroup>
                                <ListGroup.Item><Link to="/setting"><FaCog/> Settings</Link></ListGroup.Item>
                                <ListGroup.Item><MdHelp/> Help & Support</ListGroup.Item>
                                <ListGroup.Item><FaCloudMoon/> Dark Mode <button
                                    onClick={toggleDarkMode}>switch</button></ListGroup.Item>
                                <ListGroup.Item onClick={Logout}><FiLogOut/> Log Out</ListGroup.Item>
                            </ListGroup>
                        </Popover>
                    }
                >
                    <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                         id="profile-pic"/>
                </OverlayTrigger>
                :
                <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    rootClose
                    overlay={
                        <Popover>
                            <Popover.Title as="h3"><img
                                src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"/>
                            <span className="your-name">Guest</span>
                            </Popover.Title>

                            <ListGroup>
                                <ListGroup.Item><Link to="/login"><FaCog/> Login</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="/register"><FaCog/> Register</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="/setting"><FaCog/> Settings</Link></ListGroup.Item>
                                <ListGroup.Item><Link to="/support"><MdHelp/> Help & Support</Link></ListGroup.Item>
                            </ListGroup>
                        </Popover>
                    }
                >
                    <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                         id="profile-pic"/>
                </OverlayTrigger>
            }
        </div>
    )
}
export default UserPanel