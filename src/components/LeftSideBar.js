import React, {useState} from "react";
import {FaChevronRight} from "react-icons/fa";
import '../styles/leftsidebar.css'

const LeftSideBar = (props) => {
    return (
        <>

            <div className=" vertical-nav " id={props.slideState ? 'sidebar':'active'}>
                <div className="py-4 px-3 mb-2 ">
                    <h4 className="font-weight-white text-muted ">Community</h4>
                    <input type="text" id="left-side-search" placeholder="search community" />
                </div>
                <button className="btn btn-info mx-5">+ create community</button>
                <br/><br/>
                <p className="text-white font-weight-bold px-3  pb-4 mb-0">Your Community</p>
                <div className="container">
                <table className="table">
                    <tr>
                        <td><img src="https://picsum.photos/50/50" /></td>
                        <td>commnunity 1 2 2 2 2 </td>
                    </tr>
                    <tr>
                        <td><img src="https://picsum.photos/50/50" /></td>
                        <td>commnunity 1 2 2 2 2 </td>
                    </tr>
                </table>
                </div>
            </div>

        </>
    )
}

export default LeftSideBar