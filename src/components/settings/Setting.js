import React, {useContext, useRef, useState} from 'react'
import '../../styles/setting.css'
import {FaLongArrowAltLeft, FaUser} from "react-icons/fa";
import CSSTransition from "react-transition-group/CSSTransition";
import Context from "../Context";
import SettingList from "./SettingList";


const Setting = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);


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
                unmountOnExit
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<FaLongArrowAltLeft />}>
                        <h5>Account</h5>
                    </DropdownItem>
                    <DropdownItem> <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                                        id="profile-pic"/>
                        username</DropdownItem>
                    <DropdownItem>Email <br/>e@e.e</DropdownItem>
                    <DropdownItem>Password <br/>******</DropdownItem>

                    <DropdownItem>Disable</DropdownItem>
                    <DropdownItem>Delete</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'animals'}
                unmountOnExit
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<FaLongArrowAltLeft />}>
                        <h5>Animals</h5>
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