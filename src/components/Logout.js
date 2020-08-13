import {Redirect} from "react-router-dom";
import React from "react";

const Logout = () => {
    localStorage.removeItem("user")
    return (
        <Redirect to="/login" />
    )
}


export default Logout