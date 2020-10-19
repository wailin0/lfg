import React, {useContext, useEffect, useState} from "react";
import '../../styles/leftsidebar.css'
import Context from "../Context";
import CommunityRegModel from "./CommunityRegModel";
import axios from "axios"
import Rest from "../Rest";
import JWTHeader from "../auth/JWTHeader";

const CommunitySideBar = () => {
    const [groupRegModel, setModalShow] = useState(false);
    const [communityList, setCommunityList] = useState([]);

    useEffect(() => {
        axios.get(`${Rest}/community`, {headers: JWTHeader()})
            .then(response => {
                setCommunityList(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])


    const {slideState} = useContext(Context)
    return (
        <>

            <div className=" vertical-nav " id={slideState ? 'sidebar' : 'active'}>
                <div className="py-4 px-3 mb-2 ">
                    <h4 className="font-weight-white text-muted ">Community</h4>
                    <input type="text" id="left-side-search" placeholder="search community"/>
                </div>
                <button className="btn btn-info mx-5" onClick={() => setModalShow(true)}>+ create community</button>
                <br/><br/>
                <p className="text-white font-weight-bold px-3  pb-4 mb-0">Your Community</p>
                <div className="container">
                    <table className="table">
                        {communityList.map((community) => (
                            <>
                                <tr key={community.id}>
                                    <td><img src="https://picsum.photos/50/50" alt={community.name}/></td>
                                    <td>{community.name}</td>
                                </tr>
                            </>
                        ))}
                        <tr>
                            <td><img src="https://picsum.photos/50/50"/></td>
                            <td>commnunity 1 2 2 2 2</td>
                        </tr>
                        <tr>
                            <td><img src="https://picsum.photos/50/50"/></td>
                            <td>commnunity 1 2 2 2 2</td>
                        </tr>
                    </table>
                </div>
            </div>
            <CommunityRegModel
                show={groupRegModel}
                onHide={() => setModalShow(false)}
            />

        </>
    )
}

export default CommunitySideBar