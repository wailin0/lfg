import React from "react";
import '../styles/notipanel.css'
import ListGroup from "react-bootstrap/ListGroup";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {FaBell} from "react-icons/fa";

const NotiPanel = (props) => {

    return (
    <>

        <OverlayTrigger
            trigger="click"
            placement="bottom"
            rootClose
            overlay={
                <Popover>
                    <Popover.Title as="h3">notifications</Popover.Title>

                    <ListGroup>
                        <ListGroup.Item>fffffffff</ListGroup.Item>
                        <ListGroup.Item>ffffffffffff</ListGroup.Item>
                    </ListGroup>
                </Popover>
            }
        >
            <a href="#"><span className="mx-3 header-icon-link"><FaBell /></span></a>
        </OverlayTrigger>

    </>
    )
}

export default NotiPanel