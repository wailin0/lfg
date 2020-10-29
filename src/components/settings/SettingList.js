import React, {useContext} from "react";
import Context from "../Context";
import CSSTransition from "react-transition-group/CSSTransition";
import {FaLongArrowAltLeft, FaUser} from "react-icons/fa";
import SettingItem from "./SettingItem";
import Account from "./user/Account/Account";
import Security from "./user/Security";


const SettingList = () => {
    const {activeMenu} = useContext(Context)
    return (
        <div className="dropdown container">

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
                        goToMenu="security">
                        Security
                    </SettingItem>
                    <SettingItem
                        leftIcon="🦧"
                        goToMenu="privacy">
                        Privacy
                    </SettingItem>
                    <SettingItem
                        leftIcon="🦧"
                        goToMenu="blocking">
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
                in={activeMenu === 'premium'}
                unmountOnExit>
                preeeeeee
            </CSSTransition>
            <CSSTransition
                in={activeMenu === 'security'}
                unmountOnExit>
                sec
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'privacy'}
                unmountOnExit>
                pri
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'blocking'}
                unmountOnExit>
                <Account/>
            </CSSTransition>






            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
            >
                <div className="menu">
                    App Setting
                    <SettingItem
                        leftIcon={<FaUser/>}
                        goToMenu="notification">
                        Notification
                    </SettingItem>
                    <SettingItem
                        leftIcon="🦧"
                        goToMenu="language">
                        Language
                    </SettingItem>
                    <SettingItem
                        leftIcon="🦧"
                        goToMenu="appearance">
                        Appearance
                    </SettingItem>
                    <SettingItem
                        leftIcon="🦧"
                        goToMenu="DataUsage">
                        Data Usage
                    </SettingItem>
                    <SettingItem
                        leftIcon="🦧"
                        goToMenu="Video&Audio">
                        Video & Audio
                    </SettingItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'notification'}
                unmountOnExit>
                <Account/>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'language'}
                unmountOnExit>
                <Account/>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'appearance'}
                unmountOnExit>
                <Account/>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'DataUsage'}
                unmountOnExit>
                <Account/>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'Video&Audio'}
                unmountOnExit>
                <Account/>
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
                        goToMenu="support">
                        Support
                    </SettingItem>
                    <SettingItem
                        leftIcon="🦧"
                        goToMenu="policies">
                        Policies
                    </SettingItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'Video&Audio'}
                unmountOnExit>
                <Account/>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'support'}
                unmountOnExit>
                <Account/>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'policies'}
                unmountOnExit>
                <Account/>
            </CSSTransition>


        </div>
    )
}

export default SettingList