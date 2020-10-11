import React, {useContext, useState} from "react";
import Context from "../Context";
import ChatSideBar from "./ChatSideBar";
import "../../styles/chat.css"


const Chat = () => {
    const [messages, setMessages] = useState({
        username: '',
        allMessages: [],
        userMessage: "",
    })

    const [noti, setNoti] = useState({
        noti: []
    })






    const slideState = useContext(Context)
    return (
        <>
            <ChatSideBar slideState={slideState}/>

            <div className="container-fluid">
                <div className="row justify-content-center h-100">

                    <div className="col-md-8 col-xl-6 chat">
                        <div className="card chat-card">
                            <div className="card-header msg_head">
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src=""
                                             className="rounded-circle user_img" />
                                            <span className="online_icon"></span>
                                    </div>
                                    <div className="user_info">
                                        <span>username</span>
                                    </div>

                                </div>
                            </div>
                            <div className="card-body msg_card_body">
                                <div className="d-flex justify-content-start mb-4">
                                    <div className="img_cont_msg">
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                                             className="rounded-circle user_img_msg" />
                                    </div>
                                    <div className="msg_cotainer">
                                        Hi, how are you ?
                                        <span className="msg_time">8:40 AM, Today</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end mb-4">
                                    <div className="msg_cotainer_send">
                                        Hi  i am good tnx how about you?
                                        <span className="msg_time_send">8:55 AM, Today</span>
                                    </div>
                                </div>


                            </div>
                            <div className="card-footer">
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <span className="input-group-text attach_btn"><i
                                            className="fas fa-paperclip"></i></span>
                                    </div>
                                    <textarea name="" className="form-control type_msg"
                                              placeholder="Type your message..."></textarea>
                                    <div className="input-group-append">
                                        <span className="input-group-text send_btn"><i
                                            className="fas fa-location-arrow"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat;