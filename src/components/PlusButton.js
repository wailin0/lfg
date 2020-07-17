import React from "react";
import Button from "react-bootstrap/Button";
import '../styles/plusbutton.css'
import CommunityModal from "./CommunityModal";
import {FaPlus} from 'react-icons/fa'

const PlusButton = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>

            <Button variant="primary" onClick={() => setModalShow(true)} id="mobile-btn">
                <FaPlus />
            </Button>

            <CommunityModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default PlusButton