import React from "react";
import '../styles/header.css'
import {Link, NavLink} from "react-router-dom";


const Header = () => (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

                <NavLink className="navbar-brand logo" to="/">LFG</NavLink>

            <div className="navbar-collapse  w-100 order-0 order-md-0 ">
                <div className="navbar-nav mx-auto mobile-header">
                    <div className="input-group mx-1">
                        <div className="input-group-prepend">
                            <span className="input-group-text fa fa-chevron-right btn-circle mobile-btn"></span>
                        </div>
                        <input type="text" className="form-control mx-1 " id="search-input" placeholder="search" />
                            <div className="input-group-append">
                                <span className="input-group-text fa fa-bars btn-circle mobile-btn"></span>
                            </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto header-icon">
                <NavLink className="mx-3 header-icon-link" to="/" exact={true} activeClassName="header-active"><span className="fa fa-newspaper-o"></span></NavLink>
                <NavLink className="mx-3 header-icon-link" to="/lfg" activeClassName="header-active"><span className="fa fa-gamepad"></span></NavLink>
                <NavLink className="mx-3 header-icon-link" to="/friends" activeClassName="header-active"><span className="fa fa-users"></span></NavLink>
                <NavLink className="mx-3 header-icon-link" to="/chat" activeClassName="header-active"><span className="fa fa-comments"></span></NavLink>
                <a href="/#"> <span className="fa fa-bell mx-3 header-icon-link"></span></a>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">

                <ul className="navbar-nav ml-auto right-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="https://res.cloudinary.com/gamingage/image/upload/v1594573284/favicon_xl6rpu.png"  className="avatar img-fluid"  />
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

    </div>
)

export default Header