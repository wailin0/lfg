import React, {useContext, useEffect, useState} from "react";
import {Form, InputGroup} from "react-bootstrap";
import {FaEye} from "react-icons/fa";
import {GiBleedingEye} from "react-icons/gi";
import {Link} from "react-router-dom";
import axios from "axios";
import Rest from "./Rest";
import Context from "./Context";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [login, setLogin] = useState({
        username: '',
        password: '',
        error: ''
    })



    const toggleEye = () => {
        setShowPassword(!showPassword)
    }

    const {auth, setAuth} = useContext(Context);

    const loginHandle = (e) => {
        e.preventDefault()
        axios.post(`${Rest}/all/login`,login )
            .then(response => {
                console.log(response.data)
                localStorage.setItem("user", JSON.stringify(response.data))
                setAuth(true)
            }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className="container">
                <div className="signup-content">
                    { auth && <span>Login success! u can check jwt in local storage</span> }
                    <Form onSubmit={loginHandle}>
                        <h4 className="text-center">Login</h4>
                        <Form.Group>
                            <Form.Control type="text" name="username" placeholder="Your Name" value={login.username} onChange={(e) => setLogin({...login, username: e.target.value})}  />
                        </Form.Group>

                        <Form.Group>
                            <InputGroup>
                                <Form.Control type={showPassword ? "text": "password"} name="password" placeholder="password" value={login.password} onChange={(e) => setLogin({...login, password: e.target.value})} />
                                <InputGroup.Append>
                                    <InputGroup.Text id="eye">
                                        { showPassword ? <FaEye onClick={toggleEye} /> : <GiBleedingEye onClick={toggleEye} /> }
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group>
                            <input type="checkbox" name="agree-term" />
                            <Form.Label className="label-agree-term ml-2">remember me</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <button className="form-submit" disabled={false}>Log in</button>
                        </Form.Group>
                    </Form>
                    Are you new ? <Link to="/register">Register here</Link><br/>
                    <Link to="/recover">Recover your password</Link>
                </div>
            </div>
        </div>
    )
}

export default Login