import React, {useContext, useRef, useState} from 'react'
import '../../styles/setting.css'
import {FaLongArrowAltLeft, FaLongArrowAltRight, FaUser} from "react-icons/fa";
import CSSTransition from "react-transition-group/CSSTransition";
import Context from "../Context";
import SettingList from "./SettingList";
import SettingItem from "./SettingItem";
import Form from 'react-bootstrap/Form'
import Account from "./user/Account/Account";
import {Button, Card} from "react-bootstrap";
import ChangePassword from "./user/Account/ChangePassword";
import ChangeEmail from "./user/Account/ChangeEmail";
import ChangeUsername from "./user/Account/ChangeUsername";


const Setting = () => {
    const [activeMenu, setActiveMenu] = useState('main');


    return (
        <Context.Provider value={{setActiveMenu}}>
            <div className=" container">

                <CSSTransition
                    in={activeMenu === 'main'}
                    unmountOnExit
                >
                    <div className="menu">
                        User Setting
                        <SettingItem
                            leftIcon={<FaUser/>}
                            goToMenu="account">
                            Account
                        </SettingItem>
                        <SettingItem
                            leftIcon="🦧"
                            goToMenu="premium">
                            Premium
                        </SettingItem>
                        <SettingItem
                            leftIcon="🦧"
                            goToMenu="privacy">
                            Privacy
                        </SettingItem>
                        <SettingItem
                            leftIcon="🦧"
                            goToMenu="animals">
                            Blocking
                        </SettingItem>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={activeMenu === 'account'}
                    unmountOnExit>
                    <Account/>
                </CSSTransition>
                <CSSTransition
                    in={activeMenu === 'username'}
                    unmountOnExit>
                    <ChangeUsername/>
                </CSSTransition>
                <CSSTransition
                    in={activeMenu === 'email'}
                    unmountOnExit>
                    <ChangeEmail/>
                </CSSTransition>
                <CSSTransition
                    in={activeMenu === 'password'}
                    unmountOnExit>
                    <ChangePassword/>
                </CSSTransition>





                <CSSTransition
                    in={activeMenu === 'main'}
                    unmountOnExit>
                    <div className="menu">
                        App Setting
                        <SettingItem
                            leftIcon={<FaUser/>}
                            goToMenu="settings">
                            Notifications
                        </SettingItem>
                        <SettingItem
                            leftIcon="🦧"
                            goToMenu="animals">
                            Language
                        </SettingItem>
                        <SettingItem
                            leftIcon="🦧"
                            goToMenu="animals">
                            Appearance
                        </SettingItem>
                        <SettingItem
                            leftIcon="🦧"
                            goToMenu="animals">
                            Data Usage
                        </SettingItem>
                        <SettingItem
                            leftIcon="🦧"
                            goToMenu="animals">
                            Video & Audio
                        </SettingItem>
                    </div>
                </CSSTransition>


                <CSSTransition
                    in={activeMenu === 'main'}
                    unmountOnExit
                >
                    <div className="menu">
                        Information
                        <SettingItem
                            leftIcon={<FaUser/>}
                            goToMenu="settings">
                            Terms of Service
                        </SettingItem>
                        <SettingItem
                            leftIcon="🦧"
                            goToMenu="animals">
                            Support
                        </SettingItem>
                        <SettingItem
                            leftIcon="🦧"
                            goToMenu="animals">
                            Policies
                        </SettingItem>
                    </div>
                </CSSTransition>


                <CSSTransition
                    in={activeMenu === 'premium'}
                    unmountOnExit
                >
                    <div className="menu">
                        <SettingItem goToMenu="main" leftIcon={<FaLongArrowAltLeft/>}>
                            <h5>Animals</h5>
                        </SettingItem>
                        <SettingItem leftIcon="🦘">Kangaroo</SettingItem>
                        <SettingItem leftIcon="🐸">Frog</SettingItem>

                    </div>
                </CSSTransition>

                <CSSTransition
                    in={activeMenu === 'privacy'}
                    unmountOnExit
                >
                    <div className="menu">
                        <SettingItem goToMenu="main" leftIcon={<FaLongArrowAltLeft/>}>
                            <h5>Animals</h5>
                        </SettingItem>
                        <SettingItem leftIcon="🦘">Kangaroo</SettingItem>
                    </div>
                </CSSTransition>


            </div>
        </Context.Provider>
    );
}

export default Setting