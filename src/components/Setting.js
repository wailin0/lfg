import React from 'react'
import '../styles/setting.css'

const Setting = () => (
    <div className="container setting">

        <div className="row setting-nav">
            <div className="col-2">
                <h5>User Settings</h5>
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active"  data-toggle="pill" href="#account" role="tab"  aria-selected="true">
                        Account</a>
                    <a className="nav-link"  data-toggle="pill" href="#premium" role="tab" >
                        Premium</a>
                    <a className="nav-link"  data-toggle="pill" href="#security" role="tab" >
                        Security</a>
                    <a className="nav-link"  data-toggle="pill" href="#privacy" role="tab" >
                        Privacy</a>
                    <a className="nav-link"  data-toggle="pill" href="#blocking" role="tab" >
                        Blocking</a>

                    <br/>
                    <h5>App Settings</h5>
                    <a className="nav-link"  data-toggle="pill" href="#notifications" role="tab"  >
                        Notifications</a>
                    <a className="nav-link"  data-toggle="pill" href="#language" role="tab"  >
                        Language</a>
                    <a className="nav-link"  data-toggle="pill" href="#appearance" role="tab"  >
                        Appearance</a>
                </div>
                <br/>

            </div>

            <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="account" role="tabpanel">
                        account
                    </div>
                    <div className="tab-pane fade" id="premium" role="tabpanel">
                        Premium
                    </div>
                    <div className="tab-pane fade" id="security" role="tabpanel">
                        security
                    </div>
                    <div className="tab-pane fade" id="privacy" role="tabpanel">
                        privacy
                    </div>
                    <div className="tab-pane fade" id="blocking" role="tabpanel">
                        blocking
                    </div>
                    <div className="tab-pane fade" id="notifications" role="tabpanel">
                        notificaiton
                    </div>
                    <div className="tab-pane fade" id="language" role="tabpanel">
                        language
                    </div>
                    <div className="tab-pane fade" id="appearance" role="tabpanel">
                        appareance
                    </div>


                </div>
            </div>

        </div>



    </div>
)

export default Setting