import React, {useEffect, useState} from "react";
import '../styles/register.css'
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {GiBleedingEye} from 'react-icons/gi'
import {Form, InputGroup} from 'react-bootstrap'
import {Link} from "react-router-dom";
import axios from "axios";
import Rest from "./Rest";

const Register = () => {
    const [validation, setValidation] = useState({
        username: false,
        email: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState({
        id: null,
        username: '',
        email : '',
        password : '',
        confirmPassword: ''
    })

    const toggleEye = () => {
        setShowPassword(!showPassword)
    }

    const handleInputChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]: value})

    }


    const registerUser = (e) => {
        e.preventDefault()
        const userData = {
            username: user.username,
            email : user.email,
            password : user.password
        }
        axios.post(`${Rest}/register`,userData )
            .then(response => {
                console.log(response.data)
            }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        axios.get(`${Rest}/validation/username/${user.username}`)
            .then(response => {
                if(response.data) {
                    setValidation({...validation, username: response.data})
                }
                else {
                    setValidation({...validation, username: response.data})
                }
            })
    },[user.username])

    useEffect(() => {
        axios.get(`${Rest}/validation/email/${user.email}`)
            .then(response => {
                if(response.data){
                    setValidation({...validation, email: true})
                }
                else{
                    setValidation({...validation, email: false})
                }
            })
    },[user.email])



    return (
        <>
                    <div className="container">
                        <div className="signup-content">
                            <Form onSubmit={registerUser}>
                                <h4 className="text-center">Create account</h4>
                                <Form.Group>
                                    <Form.Control type="text" name="username" placeholder="Your Name" value={user.username} onChange={handleInputChange}  />
                                    { validation.username && "username already taken"}
                                </Form.Group>

                                <Form.Group >
                                    <Form.Control type="email" name="email" placeholder="your email" value={user.email} onChange={handleInputChange} />
                                    { validation.email && "email already in used"}
                                </Form.Group>

                                <Form.Group>
                                <InputGroup>
                                    <Form.Control type={showPassword ? "text": "password"} name="password" placeholder="password" value={user.password} onChange={handleInputChange} />
                                <InputGroup.Append>
                                    <InputGroup.Text id="eye">
                                        { showPassword ? <FaEye onClick={toggleEye} /> : <GiBleedingEye onClick={toggleEye} /> }
                                    </InputGroup.Text>
                                </InputGroup.Append>
                                </InputGroup>
                                </Form.Group>

                                <Form.Group>
                                    <InputGroup>
                                    <Form.Control type={showPassword ? "text": "password"} name="confirmPassword" placeholder="confirm your password" value={user.confirmPassword} onChange={handleInputChange} />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="eye">
                                            { showPassword ? <FaEye onClick={toggleEye} /> : <GiBleedingEye onClick={toggleEye} /> }
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                    </InputGroup>
                                    { (user.password.length>0 && user.confirmPassword.length>0
                                        && user.password!==user.confirmPassword)
                                        && <span>must be the password as above</span> }
                                </Form.Group>

                                <Form.Group>
                                    <input type="checkbox" name="agree-term" />
                                    <Form.Label className="label-agree-term ml-2">I
                                        agree all statements in <a href="#" >Terms of
                                            service</a></Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <button className="form-submit" disabled={!(user.username && user.email && user.password && user.password===user.confirmPassword && !validation.username && !validation.email)}>Sign up</button>
                                </Form.Group>
                            </Form>
                                Have already an account ? <Link to="/login">Login here</Link>
                        </div>
                    </div>

        </>
    )
}

export default Register