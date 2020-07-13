import React from 'react'
import '../styles/community.css'

const Community = () => (
    <div>


            <div className="container">

                <div className="row">
                    <div className="col-md-6 mx-auto">

                    <div className="card gedf-card">
                        <div className="card-body">
                            <textarea className="form-control" rows="1" placeholder="What are you thinking?"></textarea>
                        </div>
                    </div>


                    <div className="card gedf-card">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="mr-2">
                                        <img className="rounded-circle" width="45" src="https://picsum.photos/50/50"
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
                                <h5 className="card-title"> wh???????? </h5>

                            <p className="card-text">
                                ayayyayayayayayayayaayaayayayayaya
                                ayyayayayayayayayaaayyayayaayayaya
                            </p>
                            <div>
                                <span className="badge bg-danger">NSFW</span>

                                <span className="badge bg-dark">Dark</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <span className="card-link"><b className="text-muted mb-2">1 </b><i className="fa fa-thumbs-up"></i> Like</span>
                            <span className="card-link"><b className="text-muted mb-2">1 </b><i className="fa fa-thumbs-down"></i> Unlike</span>
                            <span className="card-link"><b className="text-muted mb-2">1 </b><i className="fa fa-comment"></i> Comment</span>
                            <span className="card-link"><b className="text-muted mb-2">1 </b><i className="fa fa-mail-forward"></i> Share</span>
                        </div>
                    </div>


                </div>
                </div>
            </div>

    </div>
)

export default Community