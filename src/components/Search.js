import React, {useEffect, useState, useRef } from 'react'
import '../styles/search.css'
import UserPanel from "./UserPanel";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const search = (
    <Popover id="popover-basic">
        <Popover.Title as="h3">go deep search for "input"</Popover.Title>
        <Popover.Content>

        </Popover.Content>
    </Popover>
);



const Search = () => {
    const [searchValue, setSearchValue] = useState([])
    const inputRef = useRef()

    useEffect(() => {
        const timer = setTimeout(() =>{
            if(searchValue === inputRef.current.value){
                const searchQuery = searchValue.length === 0 ? ''
                    : `?orderBy="title"&equalTo="${searchValue}"`
                fetch(''+ searchQuery)
                    .then(response => response.json())
                    .then(response => {
                        const searchData = []
                        for (const key in response) {
                            searchData.push({
                                id: response[key].name,
                                title: response[key].title
                            })
                        }
                        console.log(searchData)
                    })
            }
            }
            , 500)
        return () => {}
    }, [searchValue, inputRef])



    return (
    <>
        <OverlayTrigger trigger="click" placement="bottom" overlay={search} rootClose>
            <input className="mx-3" type="text" id="search-input" placeholder="search"
                   ref={inputRef}
                   value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            />
        </OverlayTrigger>
            <div id="mobile-userpanel">
            <UserPanel />
            </div>
    </>
    )
}

export default Search
