import React, {useEffect, useState} from "react";
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Rest from "../../Rest";
import "../../../styles/groupPage.css"
import {Tab, Tabs} from "react-bootstrap";
import GroupPost from "./GroupPost";

const GroupPage = () => {
    const [groupInfo, setGroupInfo] = useState(null)

    const {groupName} = useParams();


    useEffect(() => {
        axios.get(`${Rest}/group/${groupName}`)
            .then(response => {
                setGroupInfo(response.data)
            })
    }, [])


    return (groupInfo &&
        <div className="container">
            <div className="section-mini-hero" id="home"
                 style={{backgroundImage: "url('https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601609311/wailin/page/bg2_gsn6bh.jpg')"}}>
                <div className="container">
                    <div className="profile-pic">
                        <img
                            src="https://res.cloudinary.com/dt4ob4b4c/image/upload/v1601820096/wailin/wlh_v8hy6m_ssha1d.jpg"
                            alt=""/>
                    </div>
                    <h1 className="title1 mini-hero-title"><strong>{groupInfo.name}</strong></h1>
                    <h2 className="title2 mini-hero-subtitle">Full Stack Web App Developer</h2>
                </div>
            </div>

                <div className="col-md-6 mx-auto">
                    <Tabs defaultActiveKey="posts">
                        <Tab eventKey="posts" title="Posts">
                            <div className="gree">
                                <GroupPost groupId={groupInfo && groupInfo.id}/>
                            </div>
                        </Tab>

                        <Tab eventKey="events" title="Events">
                            evehts
                        </Tab>
                        <Tab eventKey="about" title="About">
                            {groupInfo.description}
                        </Tab>
                    </Tabs>
                </div>

        </div>
    )
}

export default GroupPage