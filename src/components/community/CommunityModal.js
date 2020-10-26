import React, {useContext, useState} from 'react'
import '../../styles/modal.css'
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import PostForm from "../PostForm";
import MediaForm from "../MediaForm";
import PollForm from "../PollForm";
import Context from "../Context";

const CommunityModal = (props) => {
    const [groupId, setGroupId] = useState(null)
    const {group} = useContext(Context)
    return (
        <div>

            <Modal {...props} size="md" centered>
                <Modal.Header>
                    <div className="post-to">
                        Post to
                        <select onChange={e => setGroupId(e.target.value)}>
                            <option>choose a community</option>
                            {group &&
                            group.map(group => (
                                <option value={group.id}>
                                    {group.name}
                                </option>
                            ))
                            }
                        </select>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <Tabs activeKey={props.selectTab}
                          transition={false}
                          onSelect={(key) => props.setSelectTab(key)}
                    >
                        <Tab eventKey="post" title="Blog">
                            <br/>
                            <PostForm onHide={props.onHide}
                                      loading={props.loading}
                                      groupId={groupId}
                            />

                        </Tab>
                        <Tab eventKey="media" title="Media">
                            <br/>

                            <MediaForm onHide={props.onHide}/>

                        </Tab>
                        <Tab eventKey="poll" title="Poll">
                            <br/>

                            <PollForm onHide={props.onHide}/>

                        </Tab>
                    </Tabs>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default CommunityModal