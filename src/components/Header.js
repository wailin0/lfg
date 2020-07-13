import React from "react";
import '../styles/header.css'
import {Link} from "react-router-dom";


const Header = () => (
    <div>

        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

                <a className="navbar-brand mx-auto" href="#">LFG</a>

            <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <form className="form-inline " >
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />

                        </form>
                    </li>
                </ul>
            </div>
            <div className="mx-auto order-0 ">
                <Link className="navbar-brand ml-auto" to="/">Community</Link>
                <Link className="navbar-brand ml-auto" to="/lfg">LFG</Link>
                <Link className="navbar-brand ml-auto" to="/friends">Friends</Link>
                <Link className="navbar-brand ml-auto" to="/chat">Chat</Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto right-nav">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"  className="rounded-circle img-fluid" width="40" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                            <a className="dropdown-item" href="#">Wai Lin</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Setting & Privacy</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Help & Support</a>
                            <div className="dropdown-divider"></div>
                            <div className="form-check form-switch ">
                               Dark Mode
                                <input className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" />
                            </div>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Log Out</a>
                        </div>
                    </li>
                </ul>
            </div>

        </nav>
    <br/><br/><br/><br/>
    </div>
)

export default Header