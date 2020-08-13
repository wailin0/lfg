import React, {useEffect, useState} from 'react'
import '../styles/community.css'
import CommunityModal from "./CommunityModal";
import {
    FaListOl,
    FaImage,
    FaEdit,
    FaPlus
} from 'react-icons/fa'
import Post from "./Post";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Rest from "./Rest";
import JWTHeader from "./JWTHeader";

const Community = () => {
    const [posts,setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);


    useEffect(() => {
        setLoading(true)
        axios.get(`${Rest}/post`, { headers: JWTHeader() })
            .then(response => {
                setLoading(false)
                setPosts(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    },[])


    const addPost = posts => {
        setLoading(true)
        axios.post(`${Rest}/post`,posts, { headers: JWTHeader() } )
            .then(response => {
                setLoading(false)
                setPosts(prevPosts =>
                    [...prevPosts, {id:response.data.id, ...posts}])
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


    return (
    <>
        <div className="container">

            <div className="row">
                <div className="col-md-6 mx-auto">


                    <div id="post-input">
                        <div className="card-body input-group mb-3">
                            <input type="text" className="form-control" placeholder="Blog something" data-toggle="modal" onClick={() => setModalShow(true)} />
                            <div className="btn-group input-group-append">
                                <button className="btn btn-dark " type="button">
                                    <FaEdit />
                                </button>
                                <button className="btn btn-dark" type="button"><FaImage />
                                </button>
                                <button className="btn btn-dark" type="button"><FaListOl />
                                </button>
                            </div>
                        </div>
                    </div>
                    <CommunityModal
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
        <Button variant="primary" onClick={() => setModalShow(true)} id="mobile-btn">
            <FaPlus />
        </Button>
    </>
)
}

export default Community