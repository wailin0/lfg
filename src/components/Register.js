import React, {useState} from "react";
import '../styles/register.css'
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {GiBleedingEye} from 'react-icons/gi'
import {Form, InputGroup} from 'react-bootstrap'
import {Link} from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState({
        id: null,
        userName: '',
        email : '',
        password : ''
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
            username: user.userName,
            email : user.email,
            password : user.password
        }
        axios.post('https://lfg-firebase.firebaseio.com/user.json',userData )
            .then(response => {
                setUser({
                    id: response.data.name,
                    userName: response.data.userName,
                    email : response.data.email,
                    password : response.data.password

                })
                console.log(response.data)
            }).catch(error => {
            console.log(error)
        })
    }

    return (
        <>
                    <div className="container">
                        <div className="signup-content">
                            <Form onSubmit={registerUser}>
                                <h4 className="text-center">Create account</h4>
                                <Form.Group>
                                    <Form.Control type="text" name="userName" placeholder="Your Name" value={user.userName} onChange={handleInputChange} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="email" name="email" placeholder="your email" value={user.email} onChange={handleInputChange} />
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
                                    <Form.Control type={showPassword ? "text": "password"} name="confirmPassword" placeholder="confirm your password" />
                                    <InputGroup.Append>
                                        <InputGroup.Text id="eye">
                                            { showPassword ? <FaEye onClick={toggleEye} /> : <GiBleedingEye onClick={toggleEye} /> }
                                        </InputGroup.Text>
                                    </InputGroup.Append>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group>
                                    <input type="checkbox" name="agree-term" />
                                    <Form.Label className="label-agree-term ml-2">I
                                        agree all statements in <a href="#" >Terms of
                                            service</a></Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <button className="form-submit" disabled={!(user.userName && user.email && user.password)}>Sign up</button>
                                </Form.Group>
                            </Form>
                                Have already an account ? <Link to="/login">Login here</Link>
                        </div>
                    </div>

        </>
    )
}

export default Register