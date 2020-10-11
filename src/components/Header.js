import React, {useContext} from "react";
import '../styles/header.css'
import { NavLink} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import NotiPanel from "./NotiPanel";
import UserPanel from "./UserPanel";
import {FaChevronRight, FaUsers, FaChevronLeft} from 'react-icons/fa'
import {IoLogoGameControllerB} from 'react-icons/io'
import {IoIosChatboxes, IoIosPeople} from 'react-icons/io'
import Search from "./Search";
import Context from "./Context";



const Header = () => {
    const {slideState, toggleSlide} = useContext(Context)
    return (
        <>
            <Navbar bg="" expand="md" fixed="top">


                <div className="mx-auto mobile-header">
                    { slideState && <span className="text-warning"><FaChevronRight onClick={toggleSlide} /></span>  }
                    { !slideState && <span className="text-warning"><FaChevronLeft onClick={toggleSlide} /></span>  }
                <Search />
                </div>

                <div className="mx-auto  header-icon">
                    <NavLink className="mx-3 header-icon-link" to="/community" exact={true} activeClassName="header-active">
                        <IoIosPeople />
                    </NavLink>
                    <NavLink className="mx-3 header-icon-link" to="/lfg" activeClassName="header-active">
                        <IoLogoGameControllerB />
                    </NavLink>
                    <NavLink className="mx-3 header-icon-link" to="/party" activeClassName="header-active">
                        <FaUsers />
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
        </>
    )
}
export default Header