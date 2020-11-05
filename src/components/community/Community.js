import React, {useContext, useState} from 'react'
import '../../styles/community.css'
import '../../styles/AnimatedMobileButton.css'
import CommunityModal from "./CommunityModal";
import {FaEdit, FaImage, FaListOl} from 'react-icons/fa'
import Post from "../Post";
import CommunitySideBar from "./CommunitySideBar";
import Context from "../Context";

const Community = () => {
    const [selectTab, setSelectTab] = useState('post');
    const [modalShow, setModalShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);



    const openSelectedTab = (tabName) => {
        setSelectTab(tabName)
        setModalShow(true)
    }


    const slideState = useContext(Context)
    return (
        <>
            <CommunitySideBar slideState={slideState} />
            <div className="container">

                <div className="row">
                    <div className="col-md-6 mx-auto">

                        <div id="post-input" className="mx-5">
                                <button className="btn btn-dark " type="button" onClick={() => openSelectedTab('post') } >
                                    <FaEdit/> Post
                                </button>
                                <button className="btn btn-dark mx-4" type="button" onClick={() => openSelectedTab('media') } >
                                    <FaImage/> Media
                                </button>
                                <button className="btn btn-dark " type="button" onClick={() => openSelectedTab('poll') } >
                                    <FaListOl/> Poll
                                </button>
                        </div>
                        <CommunityModal
                            setSelectTab={setSelectTab}
                            selectTab={selectTab}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            setShowDeleteModal={setShowDeleteModal}
                        />
                        <Post
                            showDeleteModal={showDeleteModal}
                            setShowDeleteModal={setShowDeleteModal}
                        />

                    </div>
                </div>
            </div>

            <div id="mobile-btn">
                <input id="triggerButton" className="triggerButton" type="checkbox"/>
                <label htmlFor="triggerButton"></label>
                <div className="one" onClick={() => openSelectedTab('post') }><span className="button-icon"><FaEdit/></span></div>
                <div className="two" onClick={() => openSelectedTab('media') }><span className="button-icon"><FaImage/></span></div>
                <div className="three" onClick={() => openSelectedTab('poll') }><span className="button-icon"><FaListOl/></span></div>
            </div>
        </>
    )
}

export default Community