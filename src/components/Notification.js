import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Alert} from "react-bootstrap";
import {clearNotification} from "../reducers/NotiReducer";

const Notification = () => {
    const noti = useSelector((state) => state.noti)

    const dispatch = useDispatch()

    if (!noti) {
        return null
    }

    const style = {
        position: 'fixed'
    }

    return <div style={style}>
        <Alert variant={noti.type} onClose={() => dispatch(clearNotification())} dismissible>
            <p>{noti.message}</p>
        </Alert>
    </div>
}

export default Notification