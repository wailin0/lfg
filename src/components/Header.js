import React, {useState} from "react";
import '../styles/header.css'
import {Link, NavLink} from "react-router-dom";
import Search from "./Search";
import {Navbar, Nav} from "react-bootstrap";
import NotiPanel from "./NotiPanel";
import UserPanel from "./UserPanel";
import {FaUserFriends} from 'react-icons/fa'
import {IoLogoGameControllerB} from 'react-icons/io'
import {IoIosChatboxes, IoIosPeople} from 'react-icons/io'



const Header = () => {
    return (
        <div>
            <Navbar bg="dark" expand="md" fixed="top">

                <Navbar.Brand as={Link} to="/" id="logo">LFG</Navbar.Brand>

                <Search/>

                <div className="mx-auto  header-icon">
                    <NavLink className="mx-3 header-icon-link" to="/" exact={true} activeClassName="header-active">
                        <IoIosPeople />
                    </NavLink>
                    <NavLink className="mx-3 header-icon-link" to="/lfg" activeClassName="header-active">
                        <IoLogoGameControllerB />
                    </NavLink>
                    <NavLink className="mx-3 header-icon-link" to="/friends" activeClassName="header-active">
                        <FaUserFriends />
                    </NavLink>
                    <NavLink className="mx-3 header-icon-link" to="/chat" activeClassName="header-active">
                        <IoIosChatboxes />
                    </NavLink>
                    <NotiPanel />
                </div>

                <div id="pc-userpanel">
                <UserPanel />
                </div>
            </Navbar>
        </div>
    )
}
export default Header