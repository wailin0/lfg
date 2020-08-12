import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/creategroup.css"
import {InputGroup} from "react-bootstrap";
import {FaEye} from "react-icons/fa";
import {GiBleedingEye} from "react-icons/gi";
import {Link} from "react-router-dom";


const CreateGroup = () => {
    const [group, setGroup] = useState({
        id: null,
        name: '',
        topic: ''
    })

    return (
        <div className="container">

        </div>
    )
}

export default CreateGroup