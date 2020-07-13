import React, {useState} from 'react'
import '../styles/search.css'
import UserPanel from "./UserPanel";
import {FaChevronRight} from 'react-icons/fa'
import LeftSideBar from "./LeftSideBar";


const Search = () => {
    return (
    <>
            <input type="text"  className="mx-3" id="search-input" placeholder="search"/>

            <div id="mobile-userpanel">
            <UserPanel />
            </div>
    </>
    )
}

export default Search
