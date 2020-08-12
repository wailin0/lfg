import React, {useState} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ListGroup from "react-bootstrap/ListGroup";
import '../styles/userpanel.css'
import {FiLogOut} from 'react-icons/fi'
import {FaCloudMoon, FaCog} from 'react-icons/fa'
import {MdHelp } from 'react-icons/md'
import {Link} from "react-router-dom";


const UserPanel = () => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }


    return (
        <div>
            <OverlayTrigger
                trigger="click"
                placement="bottom"
                rootClose
                overlay={
                    <Popover>
                        <Popover.Title as="h3"><img
                            src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"/> Wai
                            Lin <br/>view your profile</Popover.Title>

                        <ListGroup>
                            <ListGroup.Item><Link to="/setting" ><FaCog/> Settings</Link></ListGroup.Item>
                            <ListGroup.Item><MdHelp/> Help & Support</ListGroup.Item>
                            <ListGroup.Item><FaCloudMoon/> Dark Mode <button onClick={toggleDarkMode}>switch</button></ListGroup.Item>
                            <ListGroup.Item><FiLogOut/> Log Out</ListGroup.Item>
                        </ListGroup>
                    </Popover>
                }
            >
                <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                     id="profile-pic"/>
            </OverlayTrigger>
        </div>
    )
}
export default UserPanel