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

const Community = () => {
    const [posts,setPosts] = useState([])
    const [test, setTest] = useState([
        {id: 1, name: 'a'},
            {id:2, name: 'b'}
        ]
        )

    const testT = (id) => {
        let newArr = [...test]
        newArr[0] = {id:1, name: 'c'}
        setTest(newArr)
        console.log(test)
    }

    const [loading, setLoading] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // spring get
    // useEffect(() => {
    //     axios.get('http://localhost:8080/posts')
    //         .then(response => {
    //             setPost(response.data)
    //             console.log(response.data)
    //         })
    //         .catch(e => {
    //             console.log(e)
    //         })
    // },[])

    //spring post
    // const addPost = posts => {
    //         axios.post('http://localhost:8080/posts',posts )
    //             .then(response => {
    //                 setPosts(prevPosts =>
    //                     [...prevPosts, {id:response.data.name, ...posts}])
    //             }).catch(error => {
    //             console.log(error)
    //         })
    //     }

    useEffect(() => {
        setLoading(true)
        fetch('https://lfg-firebase.firebaseio.com/posts.json')
            .then(response => response.json())
            .then(response => {
                setLoading(false)
                const loadedData = []
                for (const key in response) {
                    loadedData.push({
                        id: key,
                        title: response[key].title,
                        body: response[key].body,
                        likes: response[key].likes,
                        dislikes: response[key].dislikes,
                        comments: response[key].comments,
                        shares: response[key].shares
                    })
                }
                setPosts(loadedData)
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
            })
    }, [])

    const addPost = posts => {
        setLoading(true)
        axios.post('https://lfg-firebase.firebaseio.com/posts.json',posts )
            .then(response => {
                setLoading(false)
                setPosts(prevPosts =>
                    [...prevPosts, {id:response.data.name, ...posts}])
            }).catch(error => {
                setLoading(false)
            console.log(error)
        })
    }

    const deletePost = postId => {
        setLoading(true)
        fetch(`https://lfg-firebase.firebaseio.com/posts/${postId}.json`, {
            method: 'DELETE'
        }).then(response => {
            setLoading(false)
            setShowDeleteModal(false)
            setPosts(prevPosts =>
                prevPosts.filter(post => post.id !== postId))
        })
    }

    const method = (p) => {
        setPosts( {...posts[1], p}   )
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
        <button onClick={testT}>
            { test.map((t) => (  <span> {t.id} - {t.name} </span>  )) }
        </button>
        <Button variant="primary" onClick={() => setModalShow(true)} id="mobile-btn">
            <FaPlus />
        </Button>
    </>
)
}

export default Community