import React, {useContext, useState} from "react";
import '../styles/leftsidebar.css'
import Context from "./Context";

const ChatSideBar = () => {
    const {slideState} = useContext(Context)
    const [onlineFriendList, setOnlineFriendList] = useState([])
    return (
        <>
            <div className=" vertical-nav " id={slideState ? 'sidebar' : 'active'}>
                <div className="py-4 px-3 mb-2 ">
                    <h4 className="font-weight-white text-muted ">Chat</h4>
                    <input type="text" id="left-side-search" placeholder="search..."/>
                </div>
                <p className="text-white font-weight-bold px-3  pb-4 mb-0">Online</p>
                <div className="container">
                    <table className="table">
                        {onlineFriendList.map((online) => (
                            <>
                                <tr key={online.id}>
                                    <td><img src="https://picsum.photos/50/50"/></td>
                                    <td>{online.username}</td>
                                </tr>
                            </>
                        ))}
                        <tr>
                            <td><img src="https://picsum.photos/50/50"/></td>
                            <td>fridne 1</td>
                        </tr>
                        <tr>
                            <td><img src="https://picsum.photos/50/50"/></td>
                            <td>friend 2</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ChatSideBar