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
        voted: false,
        userId: 1,
        postId: props.postId
    })

    const [dislike, setDislike] = useState({
        id: null,
        voted: false,
        userId: 1,
        postId: props.postId
    })


    //getting like for specifci user
    useEffect(() => {
        axios.get(`${Rest}/like/post/${props.postId}/user/1`)
            .then(response => {
                if((response.data !== null)) {
                    setLike({...like, voted: response.data.voted})
                }

            })
    },[])

    //getting likes by postId
    useEffect(() => {
        axios.get(`${Rest}/post/${props.postId}/like`)
            .then(response => {
                setLikeCount(response.data.length)
                console.log(response.data.length)
            })
    },[])


    const clickLike = () => {
        if (!like.voted) {
            setLikeCount(likeCount + 1)
            setLike({...like, voted: true})
            axios.post(`${Rest}/like/`, {voted: true, userId: 1, postId: props.postId})
                .then(response => {
                })
                .catch(err => console.log(err))
        }
        else {
            setLikeCount(likeCount - 1)
            setLike({...like, voted: false})
            axios.delete(`${Rest}/like/post/${props.postId}/user/1`)
                .catch(error => console.log(error))
        }
    }

    const clickDislike = () => {
        if (!dislike.voted) {
            setDislikeCount(dislikeCount + 1)
            setDislike({...dislike, voted: true})
            axios.post(`${Rest}/dislike/`, {voted: true, userId: 1, postId: props.postId})
                .then(response => {
                })
                .catch(err => console.log(err))
        }
        else {
            setDislikeCount(dislikeCount - 1)
            setDislike({...dislike, voted: false})
            axios.delete(`${Rest}/dislike/post/${props.postId}/user/1`)
                .catch(error => console.log(error))
        }
    }


    return (
        <>
        <div className=" mx-auto justify-content-between">
            {likeCount} <button id={ like.voted ? 'react-button-clicked' : 'react-button'} onClick={() => clickLike()} >
            <FaThumbsUp/>
        </button>
            {dislikeCount} <button id={ dislike.voted ? 'react-button-clicked' : 'react-button'} onClick={() => clickDislike()}>
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