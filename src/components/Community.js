import React from 'react'
import '../styles/community.css'
import CommunityModal from "./CommunityModal";
import LeftSideBar from "./LeftSideBar";

const Community = () => (
    <div>
        <LeftSideBar />
            <div className="container">

                <div className="row">
                    <div className="col-md-6 mx-auto">

                        <CommunityModal />

                    <div className="card gedf-card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mr-2">
                                        <img className="avatar" width="45" src="https://picsum.photos/50/50"
                                             alt="" />
                                    </div>
                                    <div className="ml-2">
                                        <div className="h5 m-0">Wai Lin</div>
                                        <div className="text-muted h7 mb-2"><i className="fa fa-clock-o"></i> 10 min ago</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-link " id="gedf-drop1"
                                                data-toggle="dropdown" >
                                            <i className="fa fa-ellipsis-h"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                            <b className="dropdown-item">Save</b>
                                            <a className="dropdown-item" href="#">Hide</a>
                                            <a className="dropdown-item" href="#">Report</a>
                                        </div>
                                    </div>
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
                           1 <button className=" btn btn-outline-dark btn-sm mr-3 btn-circle"><i className="fa fa-thumbs-up fa-2x"></i></button>
                           2 <button className=" btn btn-outline-dark btn-sm mr-3 btn-circle"><i className="fa fa-thumbs-down fa-2x"></i></button>
                           3 <button className=" btn btn-outline-dark btn-sm mr-3 btn-circle"><i className="fa fa-comment fa-2x"></i></button>
                           4 <button className=" btn btn-outline-dark btn-sm btn-circle"><i className="fa fa-mail-forward fa-2x"></i></button>
                        </div>
                        <div className="card-footer">
                            Comment
                            <div className="comment">
                            <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png" className="avatar" />
                            <input className="form-control comment-box " aria-label="With textarea"></input>
                            </div>
                        </div>
                    </div>


                </div>
                </div>
            </div>

    </div>
)

export default Community