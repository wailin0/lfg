import React, {useContext} from "react";
import Context from "../Context";

const SettingItem = (props) => {
    const {setActiveMenu} = useContext(Context)
    return (
        <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </a>
    )
}


export default SettingItem