import React from 'react'
import '../styles/modal.css'

const CommunityModal = () => (
    <div>
        <div className=" gedf-card">

            <div className="card-body input-group mb-3 desktop-input">
                <input type="text" className="form-control" placeholder="Post something" data-toggle="modal" data-target="#myModal" disabled />
                    <div className="btn-group input-group-append">
                        <button className="btn btn-dark " type="button"><span className="fa fa-pencil-square-o fa-lg"></span></button>
                        <button className="btn btn-dark" type="button"><span className="fa fa-picture-o fa-lg"></span></button>
                        <button className="btn btn-dark" type="button"><span className="fa fa-list-ol fa-lg"></span></button>
                    </div>
            </div>

        </div>

        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="card gedf-card">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts"
                                       role="tab" aria-controls="posts" aria-selected="true">Post</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="media-tab" data-toggle="tab" role="tab"
                                       aria-controls="media" aria-selected="false" href="#images">Media</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="poll-tab" data-toggle="tab" role="tab"
                                       aria-controls="poll" aria-selected="false" href="#poll">Poll</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="posts" role="tabpanel"
                                     aria-labelledby="posts-tab">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="title" />
                                        <br/>
                                        <textarea className="form-control" id="message" rows="3" placeholder="subject (optional)"></textarea>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="images" role="tabpanel" aria-labelledby="images-tab">
                                    <div className="form-group">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="customFile" />
                                                <label className="custom-file-label" htmlFor="customFile">Upload
                                                    media file</label>
                                        </div>
                                    </div>
                                    <div className="py-4"></div>
                                </div>
                                <div className="tab-pane fade" id="poll" role="tabpanel" aria-labelledby="poll-tab">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="title" />
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="post-tag">
                                <button type="button" className="btn btn-outline-danger btn-sm mr-1">NSFW</button>
                                <button type="button" className="btn btn-outline-warning btn-sm mr-1">Spoiler</button>
                                <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Help</button>
                                <button type="button" className="btn btn-outline-dark btn-sm mr-1">+</button>
                            </div>

                            <br/>
                            <div className="modal-footer pull-right">
                                <button type="button" className="btn btn-primary">Post</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-danger btn-mobile" data-toggle="modal" data-target="#myModal"><b className="fa fa-plus"></b></button>
    </div>
)

export default CommunityModal