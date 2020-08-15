
import React, {useContext, useState} from "react";
import Context from "./Context";
import ChatSideBar from "./ChatSideBar";
import "../styles/chat.css"
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import Rest from "./Rest";

let stompClient = null

const Chat = () => {
    const [messages, setMessages] = useState({
        username: '',
        allMessages: [],
        userMessage: "",
    })

    const [noti, setNoti] = useState({
        noti: []
    })

    const [state, setState] = useState({
        usernamePage: true,
        chatPage: false,
        error: ''
    })



    const connect = (event) => {
        event.preventDefault()
        if(messages.username) {
            const socket = new SockJS(`${Rest}/ws`);
            stompClient = Stomp.over(socket)
            stompClient.connect({}, onConnected, onError);
        }
    }

    const onConnected = () => {
        stompClient.subscribe('/topic/public', onMessageReceived)
        stompClient.send('/app/chat.addUser', {}, JSON.stringify({sender: messages.username, type: 'JOIN'}))
        setState({...state, usernamePage: false, chatPage: true})
    }

    const disconnect = () => {
        stompClient.disconnect()
    }

    const onError = (error) => {
        setMessages({...messages, error: 'cannot connect to chat room, please refresh and try again'})
    }

    const sendMessage = (event) => {
        event.preventDefault()
        if(messages.userMessage && stompClient) {
            let chatMessage = {
                sender: messages.username,
                content: messages.userMessage,
                type: 'CHAT'
            }
            stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage))
        }
    }

    const onMessageReceived = (payload) => {
        const hello = Array('Hello!','Look It is','Welcome','Ohayo','Konnichiwa','Hajimemashite');
        const bye = Array('Goodbye','We will miss you','Mata ashita','Sayounara','Good luck')

        let randomHello = hello[Math.floor(Math.random()*hello.length)]
        let randomBye = bye[Math.floor(Math.random()*bye.length)]

        const message = JSON.parse(payload.body);

        if(message.type === 'JOIN') {
            noti.noti.push({'noti' : randomHello+" " +message.sender})
            setNoti({...noti, noti: noti.noti})
        } else if (message.type === 'LEAVE') {
            noti.noti.push({'noti' : randomBye+" " + message.sender})
            setNoti({...noti, noti: noti.noti})
        } else {
            messages.allMessages.push({
                content: message.content,
                sender: message.sender
            })
            setMessages({...messages, allMessages: messages.allMessages})
        }


    }


    const slideState = useContext(Context)
    return (
        <>
            <ChatSideBar slideState={slideState}/>

            <div className="container">
            <div className={state.usernamePage ? "username-page" : "hidden"}>
                <div className="username-page-container">
                    <h1 className="title">enter your username</h1>
                    <form id="usernameForm" name="usernameForm" onSubmit={connect}>
                        <div className="form-group">
                            <input type="text" id="name" placeholder="Username" autoComplete="off" name="username"
                                   onChange={(e) => setMessages({...messages, username: e.target.value})}
                                   value={messages.username}
                                   className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="accent username-submit">Connect</button>
                        </div>
                    </form>
                </div>
            </div>

            <div id="chat-page" className={state.chatPage ? "" : "hidden"}>
                <div className="chat-container">
                    <div className="chat-header">
                        <h2>group chat</h2>
                    </div>
                                 <ul id="messageArea">
                                     {
                                         noti.noti.map((noti) =>{
                                             return (
                                                 <div>
                                                     <li className="event-message">{noti.noti}</li>
                                                 </div>
                                             )
                                         })
                                     }

                                    {
                                        messages.allMessages.map((message) =>{
                                            return (
                                                <div>
                                                <li className="chat-message">
                                                    <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                                                         id="profile-pic"/>
                                                    <span className="mx-3 font-weight-bold">{message.sender}</span>
                                                    <p className="ml-5">{message.content}</p>
                                                </li>
                                                </div>
                                            )
                                        })
                                    }
                                 </ul>


                    <form id="messageForm" name="messageForm" onSubmit={sendMessage}>
                        <div className="form-group">
                            <div className="input-group clearfix">
                                <input type="text" id="message" placeholder="Type a message..." autoComplete="off" name="userMessage"
                                       onChange={(e) => setMessages({...messages, userMessage: e.target.value})}
                                       value={messages.userMessage}
                                       className="form-control" />
                                <button type="submit" className="primary">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default Chat;

