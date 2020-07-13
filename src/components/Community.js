import React from 'react'
import '../styles/community.css'
import CommunityModal from "./CommunityModal";
import PlusButton from "./PlusButton";
import {
    FaClock,
    FaListOl,
    FaImage,
    FaEdit,
    FaEllipsisH,
    FaThumbsUp,
    FaThumbsDown,
    FaCommentDots,
    FaShare
} from 'react-icons/fa'
import Popover from "react-bootstrap/Popover";
import ListGroup from "react-bootstrap/ListGroup";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Community = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <div>
        <div className="container">

            <div className="row">
                <div className="col-md-6 mx-auto">


                    <div id="post-input">
                        <div className="card-body input-group mb-3">
                            <input type="text" className="form-control" placeholder="Post something" data-toggle="modal" onClick={() => setModalShow(true)} />
                            <div className="btn-group input-group-append">
                                <button className="btn btn-dark " type="button">
                                    <FaEdit />
                                </button>
                                <button className="btn btn-dark" type="button"><FaImage />
                                </button>
                                <button className="btn btn-dark" type="button"><FaListOl />
                                </button>
                            </div>
                        </div>
                    </div>
                    <CommunityModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />

                    <div className="card gedf-card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mr-2">
                                        <img id="avatar" width="45" src="https://picsum.photos/50/50"
                                             alt=""/>
                                    </div>
                                    <div className="ml-2">
                                        <div className="h5 m-0">Wai Lin</div>
                                        <div className="text-muted  mb-2"><FaClock /> 10 min ago
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="left"
                                        rootClose
                                        overlay={
                                            <Popover>
                                                <ListGroup>
                                                    <ListGroup.Item>Save</ListGroup.Item>
                                                    <ListGroup.Item>Hide</ListGroup.Item>
                                                    <ListGroup.Item>Report</ListGroup.Item>
                                                </ListGroup>
                                            </Popover>
                                        }
                                    >
                                        <FaEllipsisH />
                                    </OverlayTrigger>
                                </div>
                            </div>

                        </div>
                        <div className="card-body">
                            <h5 className="card-title"> wh???????whyyyyyyyyyyyy? </h5>
                            <hr/>
                            <p className="card-text">
                                ayayyayayayayayayayaayaayayayayaya
                                ayyayayayayayayayaaayyayayaayayaya
                            </p>
                            <div>
                                <span className="badge bg-danger mr-1">NSFW</span>

                                <span className="badge bg-dark mr-1">Dark</span>
                            </div>
                        </div>
                        <div className=" mx-auto justify-content-between">
                            1 <button id="react-button">
                            <FaThumbsUp />
                        </button>
                            2 <button id="react-button">
                            <FaThumbsDown />
                        </button>
                            3 <button id="react-button">
                            <FaCommentDots />
                        </button>
                            4 <button id="react-button">
                            <FaShare />
                        </button>
                        </div>
                        <div className="card-footer">
                            Comment
                            <div className="comment">
                                <img
                                    src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"
                                    id="avatar"/>
                                <input className="form-control comment-box " aria-label="With textarea"></input>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <PlusButton/>
    </div>
)
}

export default Community