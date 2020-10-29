import React, {useContext, useEffect} from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import {FaLongArrowAltLeft, FaLongArrowAltRight, FaUser} from "react-icons/fa";
import SettingItem from "../../SettingItem";
import {Button} from "react-bootstrap";
import Context from "../../../Context";

const Account = () => {
    return (
        <div className="menu">
            <SettingItem goToMenu="main" leftIcon={<FaLongArrowAltLeft/>}>
                <h5>Account</h5>
            </SettingItem>
            <SettingItem goToMenu="username" rightIcon={<FaLongArrowAltRight/>}>Change username <br/> user</SettingItem>
            <SettingItem goToMenu="email" rightIcon={<FaLongArrowAltRight/>}>Change email
                address <br/>e@e.e</SettingItem>
            <SettingItem goToMenu="password" rightIcon={<FaLongArrowAltRight/>}>Change password</SettingItem>
            ACCOUNT MANAGEMENT
            <SettingItem>Disable</SettingItem>
            <SettingItem>Delete</SettingItem>

        </div>
    )
}

export default Account