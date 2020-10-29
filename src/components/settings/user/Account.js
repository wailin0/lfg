import React, {useContext, useEffect} from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import {FaLongArrowAltLeft, FaLongArrowAltRight, FaUser} from "react-icons/fa";
import SettingItem from "../SettingItem";
import {Button} from "react-bootstrap";
import Context from "../../Context";

const Account = () => {
    const {activeMenu} = useContext(Context)
    useEffect(() => {
        console.log("eeeeerrrrrrrrrrrrrrrrr")
    }, [])
    return (
        <>
            <SettingItem goToMenu="main" leftIcon={<FaLongArrowAltLeft/>}>
                <h5>Account</h5>
            </SettingItem>
            <SettingItem goToMenu="username" leftIcon={<FaUser/>} rightIcon={<FaLongArrowAltRight/>}>
                Change username
                <br/>user
            </SettingItem>
            <SettingItem leftIcon={'@'} rightIcon={<FaLongArrowAltRight/>}>
                Change email address
                <br/>e@e.e
            </SettingItem>
            <SettingItem leftIcon={'X'} rightIcon={<FaLongArrowAltRight/>}>
                Change password
            </SettingItem>
            ACCOUNT MANAGEMENT
            <br/><br/>
            <div><Button variant="warning">Disable</Button></div>
            <br/>
            <div><Button variant="danger">Delete</Button></div>



            <CSSTransition
                in={activeMenu === 'username'}
                unmountOnExit>
                <SettingItem goToMenu="account" leftIcon={<FaLongArrowAltLeft/>}>
                    <h5>Account</h5>
                </SettingItem>
                wwww
            </CSSTransition>
        </>
    )
}

export default Account