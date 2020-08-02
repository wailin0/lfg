import React, {useEffect, useRef, useState} from 'react'
import '../styles/setting.css'
import {FaUser,FaLongArrowAltRight,FaBolt, FaLongArrowAltLeft} from "react-icons/fa";
import CSSTransition from "react-transition-group/CSSTransition";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";


const Setting = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);


    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown container" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={100}
                classNames="menu-primary"
                unmountOnExit
               >
                <div className="menu">
                    User Setting
                    <DropdownItem
                        leftIcon={<FaUser />}
                        goToMenu="settings">
                        Account
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        goToMenu="animals">
                        Premium
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        goToMenu="animals">
                        Privacy
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        goToMenu="animals">
                        Blocking
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'main'}
                timeout={100}
                classNames="menu-primary"
                unmountOnExit
                >
                <div className="menu">
                    App Setting
                    <DropdownItem
                        leftIcon={<FaUser />}
                        goToMenu="settings">
                        Notifications
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        goToMenu="animals">
                        Language
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        goToMenu="animals">
                        Appearance
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        goToMenu="animals">
                        Data Usage
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        goToMenu="animals">
                        Video & Audio
                    </DropdownItem>
                </div>
            </CSSTransition>


            <CSSTransition
                in={activeMenu === 'main'}
                timeout={100}
                classNames="menu-primary"
                unmountOnExit
               >
                <div className="menu">
                    Information
                    <DropdownItem
                        leftIcon={<FaUser />}
                        goToMenu="settings">
                        Terms of Service
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        goToMenu="animals">
                        Support
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        goToMenu="animals">
                        Policies
                    </DropdownItem>
                </div>
            </CSSTransition>



            <CSSTransition
                in={activeMenu === 'settings'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<FaLongArrowAltLeft />}>
                        <h5>Account</h5>
                    </DropdownItem>
                    <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                         id="profile-pic"/>
                         Wai Lin
                    <DropdownItem>Email <br/>e@e.e</DropdownItem>
                    <DropdownItem>Password <br/>******</DropdownItem>
                    Management
                    <DropdownItem>Disable</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
               >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<FaLongArrowAltLeft />}>
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default Setting