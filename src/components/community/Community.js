import React, {useContext, useEffect, useState} from 'react'
import '../../styles/community.css'
import '../../styles/AnimatedMobileButton.css'
import CommunityModal from "./CommunityModal";
import {
    FaListOl,
    FaImage,
    FaEdit
} from 'react-icons/fa'
import Post from "../Post";
import axios from "axios";
import Rest from "../Rest";
import JWTHeader from "../auth/JWTHeader";
import CommunitySideBar from "./CommunitySideBar";
import Context from "../Context";

const Community = () => {
    const [selectTab, setSelectTab] = useState('post');
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const openSelectedTab = (tabName) => {
        setSelectTab(tabName)
        setModalShow(true)
    }

    useEffect(() => {
        setLoading(true)
        axios.get(`${Rest}/post`, {headers: JWTHeader()})
            .then(response => {
                setLoading(false)
                setPosts(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])


    const addPost = posts => {
        setLoading(true)
        axios.post(`${Rest}/post`, posts, {headers: JWTHeader()})
            .then(response => {
                setLoading(false)
                setPosts(prevPosts =>
                    [...prevPosts, {id: response.data.id, ...posts}])
            }).catch(error => {
            setLoading(false)
            console.log(error)
        })
    }

    const deletePost = postId => {
        setLoading(true)
        axios.delete(`${Rest}/post/${postId}`, {
            headers: JWTHeader()
        }).then(response => {
            setLoading(false)
            setShowDeleteModal(false)
            setPosts(prevPosts =>
                prevPosts.filter(post => post.id !== postId))
        }).catch(error => console.log(error))
    }

    const slideState = useContext(Context)
    return (
        <>
            <CommunitySideBar slideState={slideState}/>
            <div className="container">

                <div className="row">
                    <div className="col-md-6 mx-auto">


                        <div id="post-input" className="mx-5">
                            <div className="card-body  ">
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
                        </div>
                        <CommunityModal
                            setSelectTab={setSelectTab}
                            selectTab={selectTab}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            addPost={addPost}
                            loading={loading}
                        />
                        <Post
                            posts={posts}
                            deletePost={deletePost}
                            loading={loading}
                            showDeleteModal={showDeleteModal}
                            setShowDeleteModal={setShowDeleteModal}
                            setPosts={setPosts}
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