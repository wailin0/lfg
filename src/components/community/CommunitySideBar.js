import React, {useContext, useEffect, useState} from "react";
import '../../styles/leftsidebar.css'
import Context from "../Context";
import CommunityRegModel from "./CommunityRegModel";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserGroup} from "../../reducers/community/GroupReducer";

const CommunitySideBar = () => {
    const [groupRegModel, setModalShow] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserGroup())
    }, [])


    const groups = useSelector(state => state.groups)

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
                        {groups.map((group) => (
                                <tr key={group.groupId}>
                                    <td><img src="https://picsum.photos/50/50" alt={group.name}/></td>
                                    <td className="td-name"><Link to={`/community/${group.name}`}>{group.name}</Link></td>
                                </tr>
                        ))}
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