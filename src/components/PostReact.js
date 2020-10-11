import React, {useContext, useEffect, useState} from "react";
import {FaCommentDots, FaShare, FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import PostComment from "./PostComment";
import '../styles/postreact.css'
import rest from './Rest.js'
import Rest from "./Rest";
import axios from "axios"
import Context from "./Context";
import JWTHeader from "./auth/JWTHeader";

const PostReact = () => {
    const [showComments, setShowComments] = useState(true)
    const toggleCommentBox = () => {
        setShowComments(!showComments)
    }

    const [likeCount, setLikeCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)

    const postId = useContext(Context)


    const [like, setLike] = useState({
        id: null,
        liked: false,
        userId: 1,
        postId: postId
    })

    const [dislike, setDislike] = useState({
        id: null,
        liked: false,
        userId: 1,
        postId: postId
    })

    //getting like for specifci user
    useEffect(() => {
        axios.get(`${Rest}/auth/like/post/${postId}/user/1`, { headers: JWTHeader() })
            .then(response => {
                if((response.data.liked !== undefined)) {
                    setLike({...like, liked: response.data.liked})
                }
            })
    },[])


    //getting like for specifci user
    useEffect(() => {
        axios.get(`${Rest}/auth/dislike/post/${postId}/user/1`, { headers: JWTHeader() })
            .then(response => {
                if((response.data.liked !== undefined)) {
                    setDislike({...dislike, liked: true})
                    console.log(response.data.liked)
                }

            })
    },[postId])


    //getting likes by postId
    useEffect(() => {
        axios.get(`${Rest}/auth/post/${postId}/like`, { headers: JWTHeader() })
            .then(response => {
                setLikeCount(response.data.length)
            })
    },[postId])

    //getting dislikes by postId
    useEffect(() => {
        axios.get(`${Rest}/auth/post/${postId}/dislike`, { headers: JWTHeader() })
            .then(response => {
                setDislikeCount(response.data.length)
            })
    },[])


    //rest request for like dislike logic
    const postLike = () => {
        setLikeCount(likeCount + 1)
        setLike({...like, liked: true})
        axios.post(`${Rest}/auth/like/`, {liked: true, userId: 1, postId: postId}, { headers: JWTHeader() })
            .catch(err => console.log(err))
    }
    const deleteLike = () => {
        setLikeCount(likeCount - 1)
        setLike({...like, liked: false})
        axios.delete(`${Rest}/auth/like/post/${postId}/user/1`, { headers: JWTHeader() })
            .catch(error => console.log(error))
    }
    const postDislike = () => {
        setDislikeCount(dislikeCount + 1)
        setDislike({...dislike, liked: true})
        axios.post(`${Rest}/auth/dislike/`, {liked: false, userId: 1, postId: postId}, { headers: JWTHeader() })
            .catch(err => console.log(err))
    }
    const deleteDislike = () => {
        setDislikeCount(dislikeCount - 1)
        setDislike({...dislike, liked: false})
        axios.delete(`${Rest}/auth/dislike/post/${postId}/user/1`, { headers: JWTHeader() })
            .catch(error => console.log(error))
    }


    const changeVote = () => {
        if(!like.liked) {
            setDislikeCount(dislikeCount - 1)
            setDislike({...dislike, liked: false})
            axios.put(`${Rest}/auth/like/post/${postId}/user/1`, {liked: true, userId: 1, postId: postId}, { headers: JWTHeader() })
                .catch(error => console.log(error))
            setLikeCount(likeCount + 1)
            setLike({...like, liked: true})
        }
        else{
            setLikeCount(likeCount - 1)
            setLike({...like, liked: false})
            axios.put(`${Rest}/auth/like/post/${postId}/user/1`, {liked: false, userId: 1, postId: postId}, { headers: JWTHeader() })
                .catch(error => console.log(error))
            setDislikeCount(dislikeCount + 1)
            setDislike({...dislike, liked: true})
        }
    }


    const clickLike = () => {
        if(dislike.liked){
            if (!like.liked) {
                changeVote()
            }
        }
        else {
            if (!like.liked) {
               postLike()
            }
            else {
                deleteLike()
            }
        }
    }

    const clickDislike = () => {
        if (like.liked){
            if(!dislike.liked){
                changeVote()
            }
        }
        else {
            if (!dislike.liked){
                postDislike()
            }
            else {
                deleteDislike()
            }
        }
    }


    return (
        <>
        <div className=" mx-auto justify-content-between">
            {likeCount} <button id={ like.liked ? 'react-button-clicked' : 'react-button'} onClick={() => clickLike()} >
            <FaThumbsUp/>
        </button>
            {dislikeCount} <button id={ dislike.liked ? 'react-button-clicked' : 'react-button' } onClick={() => clickDislike()} >
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