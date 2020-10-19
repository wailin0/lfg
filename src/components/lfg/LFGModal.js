import React, {useEffect, useState} from 'react'
import '../../styles/lfgmodal.css'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {FaCog, FaLongArrowAltLeft} from "react-icons/fa";
import CSSTransition from "react-transition-group/CSSTransition";
import axios from "axios"
import Rest from "../Rest";
import Form from "react-bootstrap/Form"

const LFGModal = (props) => {
    const [activeMenu, setActiveMenu] = useState('lfg');
    const [gameList, setGameList] = useState([])

    useEffect(() => {
        axios.get(`${Rest}/gameList`)
            .then(response => {
                setGameList(response.data)
            })
            .catch(err => console.log(err))
    },[])




    const SwitchComponents = (props) => {
        return (
            <a href="#" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span >{props.leftIcon}</span>
                {props.children}
                <span >{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                backdrop="static"
                centered
            >
                <Modal.Header>
                    <input type="text" placeholder="search game"/>

                        <SwitchComponents goToMenu="setting" leftIcon={<FaCog />}>
                        </SwitchComponents>

                </Modal.Header>

                <div id="lfgmodal">

                    <CSSTransition
                        in={activeMenu === 'setting'}
                        unmountOnExit >
                        <div className="menu container">
                            <SwitchComponents goToMenu="lfg" leftIcon={<FaLongArrowAltLeft />}>
                            </SwitchComponents>

                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Location
                                    </Form.Label>
                                    <Col>
                                        <Form.Control
                                            as="select"
                                            className="my-1 mr-sm-2"
                                            custom
                                        >
                                            <option value="0">Anywhere...</option>
                                            <option value="1">Your Country</option>
                                            <option value="2">US</option>
                                            <option value="3">Canada</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalPassword">
                                    <Form.Label column sm={2}>
                                        Min Age
                                    </Form.Label>
                                    <Col>
                                        <Form.Control type="number" min="0" size="2" />
                                    </Col>
                                </Form.Group>
                                <fieldset>
                                    <Form.Group as={Row}>
                                        <Form.Label as="legend" column sm={2}>
                                            Privacy
                                        </Form.Label>
                                        <Col sm={10}>
                                            <Form.Check
                                                type="radio"
                                                label="all"
                                                name="formHorizontalRadios"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="public"
                                                name="formHorizontalRadios"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="restricted"
                                                name="formHorizontalRadios"
                                            />
                                        </Col>
                                    </Form.Group>
                                </fieldset>
                            </Form>


                        </div>
                    </CSSTransition>

                    <CSSTransition
                        in={activeMenu === 'lfg'}
                        unmountOnExit >
                    <Row>

                        { gameList.map((game) => (
                            <Col xs="auto" md="auto" key={game.id}>
                                <SwitchComponents goToMenu="setting" leftIcon={<FaCog />}>
                                    <Image width="160" src="https://scontent.frgn2-2.fna.fbcdn.net/v/t1.0-9/117385338_1265784783754957_5597550591614916103_n.jpg?_nc_cat=101&_nc_sid=a83260&_nc_eui2=AeExugFbI-TLU8oPMNNYiPzobgigYH2E9hBuCKBgfYT2EC8AW1J1-Df9076HyVI4G6wPttUEmK-Frfcqri3woSzv&_nc_ohc=uf-Gx01GWmwAX8535uw&_nc_ht=scontent.frgn2-2.fna&oh=50be4c81da778215fac1cd8f34df8bfb&oe=5F924DC7" thumbnail   />
                                </SwitchComponents>
                            </Col>
                        )) }

                        <Col xs="auto" md="auto">
                            <SwitchComponents goToMenu="setting" >
                                <Image width="160" src="https://scontent.frgn2-2.fna.fbcdn.net/v/t1.0-9/117385338_1265784783754957_5597550591614916103_n.jpg?_nc_cat=101&_nc_sid=a83260&_nc_eui2=AeExugFbI-TLU8oPMNNYiPzobgigYH2E9hBuCKBgfYT2EC8AW1J1-Df9076HyVI4G6wPttUEmK-Frfcqri3woSzv&_nc_ohc=uf-Gx01GWmwAX8535uw&_nc_ht=scontent.frgn2-2.fna&oh=50be4c81da778215fac1cd8f34df8bfb&oe=5F924DC7" thumbnail   />
                            </SwitchComponents>
                        </Col>
                    </Row>
                    </CSSTransition>

                </div>

                <Modal.Footer>
                    <Button variant="outline-info" >Find Party</Button>
                    <Button variant="outline-info" >Create Party</Button>
                    <Button variant="outline-secondary" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LFGModal