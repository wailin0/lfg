import React, {useState} from 'react'
import '../styles/search.css'
import UserPanel from "./UserPanel";
import {FaChevronRight} from 'react-icons/fa'


const Search = () => {
    return (
    <>

            <div className="mx-auto mobile-header">
                <FaChevronRight />

            <input type="text"  className="mx-3" id="search-input" placeholder="search"/>

            <div id="mobile-userpanel">
            <UserPanel />
            </div>

            </div>

    </>
    )
}

export default Search
