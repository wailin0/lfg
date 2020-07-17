import React from 'react'
import '../styles/leftsidebar.css'

const LeftSideBar = () => (
    <div>


        <div className="vertical-nav bg-dark" id="sidebar">
            <div className="py-4 px-3 mb-4 bg-dark">
                <div className="media-body">
                    <h4 className="font-weight-white text-muted mb-0">Verical Navbar</h4>
                    <p className="font-weight-grey text-muted mb-0">With HTML and Bootstrap</p>
                </div>
            </div>

            <p className="text-white font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

            <ul className="nav flex-column bg-dark mb-0">
                <li className="nav-item">
                    <a href="#" className="nav-link text-light font-italic bg-dark">
                        <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-light font-italic">
                        <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-light font-italic">
                        <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-light font-italic">
                        <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                        Gallery
                    </a>
                </li>
            </ul>

            <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>

            <ul className="nav flex-column bg-dark mb-0">
                <li className="nav-item">
                    <a href="#" className="nav-link text-light font-italic">
                        <i className="fa fa-area-chart mr-3 text-primary fa-fw"></i>
                        Area charts
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-light font-italic">
                        <i className="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                        Bar charts
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-light font-italic">
                        <i className="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                        Pie charts
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-light font-italic">
                        <i className="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                        Line charts
                    </a>
                </li>
            </ul>
        </div>

    </div>
)

export default LeftSideBar