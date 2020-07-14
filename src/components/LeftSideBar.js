import React from 'react'
import '../styles/leftsidebar.css'

const LeftSideBar = () => (
    <div>

        <div class="vertical-nav " id="sidebar">
            <div class="py-4 px-3 mb-4 ">
                <div class="media-body">
                    <h4 class="font-weight-white text-muted mb-0">Community</h4>
                <br/>
                    <input type="text" className="form-control " placeholder="search community" />
                </div>
            </div>

            <p class="text-white font-weight-bold text-uppercase px-3 small pb-4 mb-0">Your Community</p>

            <ul class="nav flex-column  mb-0">
                <li class="nav-item">
                    <a href="#" class="nav-link text-light font-italic ">
                        <img src="https://randomwordgenerator.com/img/picture-generator/52e1d04b4353ac14f1dc8460962e33791c3ad6e04e507441722872d7944dcc_640.jpg" width="50" />
                        <span> Community</span>
                    </a>
                </li>
                <hr/>
                <li class="nav-item">
                    <a href="#" class="nav-link text-light font-italic">
                        <img src="https://randomwordgenerator.com/img/picture-generator/52e1d04b4353ac14f1dc8460962e33791c3ad6e04e507441722872d7944dcc_640.jpg" width="50" />
                        <span> Community</span>
                    </a>
                </li>
                <hr/>
                <li class="nav-item">
                    <a href="#" class="nav-link text-light font-italic">
                        <img src="https://randomwordgenerator.com/img/picture-generator/52e1d04b4353ac14f1dc8460962e33791c3ad6e04e507441722872d7944dcc_640.jpg" width="50" />
                        <span> Community</span>
                    </a>
                </li>
            </ul>


        </div>
        </div>
)

export default LeftSideBar