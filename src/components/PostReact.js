import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {FaCommentDots, FaShare, FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import PostComment from "./PostComment";
import '../styles/postreact.css'
import rest from './Rest.js'
import Rest from "./Rest";
import axios from "axios"

const PostReact = (props) => {
    const [showComments, setShowComments] = useState(true)
    const toggleCommentBox = () => {
        setShowComments(!showComments)
    }

    const [likeCount, setLikeCount] = useState(0)

    const [dislikeCount, setDislikeCount] = useState(0)

    const [like, setLike] = useState({
        id: null,
        liked: false,
        userId: 1,
        postId: props.postId
    })

    const [dislike, setDislike] = useState({
        id: null,
        liked: false,
        userId: 1,
        postId: props.postId
    })

    //getting like for specifci user
    useEffect(() => {
        axios.get(`${Rest}/like/post/${props.postId}/user/1`)
            .then(response => {
                if((response.data !== null)) {
                    setLike({...like, liked: response.data.liked})
                }

            })
    },[])


    //getting like for specifci user
    useEffect(() => {
        axios.get(`${Rest}/dislike/post/${props.postId}/user/1`)
            .then(response => {
                if((response.data !== null)) {
                    setDislike({...dislike, liked: !response.data.liked})
                    console.log(response.data.liked)
                }

            })
    },[])


    //getting likes by postId
    useEffect(() => {
        axios.get(`${Rest}/post/${props.postId}/like`)
            .then(response => {
                setLikeCount(response.data.length)
            })
    },[])

    //getting dislikes by postId
    useEffect(() => {
        axios.get(`${Rest}/post/${props.postId}/dislike`)
            .then(response => {
                setDislikeCount(response.data.length)
            })
    },[])


    const clickLike = () => {
        if (like.liked) {
            setLikeCount(likeCount + 1)
            setLike({...like, liked: false})
            axios.post(`${Rest}/like/`, {liked: true, userId: 1, postId: props.postId})
                .then(response => {
                })
                .catch(err => console.log(err))
        }
        else {
            setLikeCount(likeCount - 1)
            setLike({...like, liked: true})
            axios.delete(`${Rest}/like/post/${props.postId}/user/1`)
                .catch(error => console.log(error))
        }
    }

    const clickDislike = () => {
        if (!dislike.liked) {
            setDislikeCount(dislikeCount + 1)
            setDislike({...dislike, liked: false})
            axios.post(`${Rest}/like/`, {liked: false, userId: 1, postId: props.postId})
                .then(response => {
                })
                .catch(err => console.log(err))
        }
        else {
            setDislikeCount(dislikeCount - 1)
            setDislike({...dislike, liked: true})
            axios.delete(`${Rest}/dislike/post/${props.postId}/user/1`)
                .catch(error => console.log(error))
        }
    }


    return (
        <>
        <div className=" mx-auto justify-content-between">
            {likeCount} <button id={ like.liked ? 'react-button-clicked' : 'react-button'} onClick={() => clickLike()} >
            <FaThumbsUp/>
        </button>
            {dislikeCount} <button id={ dislike.liked ? 'react-button-clicked' : 'react-button'  } onClick={() => clickDislike()} >
            <FaThumbsDown />
        </button>
            0 <button id="react-button" onClick={() => toggleCommentBox()}>
            <FaCommentDots />
        </button>
            0 <button id="react-button">
            <FaShare />
        </button>
        </div>
            {showComments &&  <PostComment />  }

            </>
    )
}

export default PostReact