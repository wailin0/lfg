import React, {useContext} from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import ListGroup from "react-bootstrap/ListGroup";
import '../styles/userpanel.css'
import {FiLogOut} from 'react-icons/fi'
import {FaCog} from 'react-icons/fa'
import {MdHelp} from 'react-icons/md'
import {Link, useHistory} from "react-router-dom";
import Context from "./Context";
import {useDispatch, useSelector} from "react-redux";
import {clearLoggedInUser} from "../reducers/UserReducer";

const UserPanel = () => {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const {auth, setAuth} = useContext(Context);
    const history = useHistory()
    const Logout = () => {
        localStorage.removeItem("LFGUser")
        setAuth(false)
        dispatch(clearLoggedInUser())
        history.push("/login")
    }

    return (
        <div>
            {auth ?
                <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    rootClose
                    overlay={
                        <Popover>
                            <Popover.Title as="h3"><img
                                src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"/>
                                {user && user.username} <br/>view your profile</Popover.Title>

                            <ListGroup>
                                <ListGroup.Item><Link to="/setting"><FaCog/> Settings</Link></ListGroup.Item>
                                <ListGroup.Item><MdHelp/> Info</ListGroup.Item>
                                <ListGroup.Item onClick={() => Logout()}><FiLogOut/> Log Out</ListGroup.Item>
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