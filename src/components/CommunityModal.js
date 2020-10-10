import React from 'react'
import '../styles/modal.css'
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import PostForm from "./PostForm";
import MediaForm from "./MediaForm";
import PollForm from "./PollForm";

const CommunityModal = (props) => {
    return (
        <div>

            <Modal {...props} size="md" centered >
                <Modal.Body>
                <Tabs activeKey={props.selectedTab} transition={false}>
                    <Tab eventKey="post" title="Blog">
                        <br/>
                        <PostForm onHide={props.onHide} addPost={props.addPost} loading={props.loading} />

                    </Tab>
                    <Tab eventKey="media" title="Media">
                        <br/>

                        <MediaForm onHide={props.onHide} />

                    </Tab>
                    <Tab eventKey="poll" title="Poll">
                        <br/>

                        <PollForm onHide={props.onHide} />

                    </Tab>
                </Tabs>
                            </Modal.Body>
            </Modal>

        </div>
    )
}
export default CommunityModal