import React, {useContext, useEffect, useState} from "react";
import {FaCommentDots, FaShare, FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import PostComment from "./PostComment";
import '../styles/postreact.css'
import Rest from "./Rest";
import axios from "axios"
import Context from "./Context";
import JWTHeader from "./auth/JWTHeader";

const PostReact = () => {
    const [showComments, setShowComments] = useState(false)
    const toggleCommentBox = () => {
        setShowComments(!showComments)
    }

    const [likeCount, setLikeCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)
    const [commentCount, setCommentCount] = useState(0)

    const {postId} = useContext(Context)


    const [like, setLike] = useState({
        id: null,
        liked: false,
        postId: postId
    })

    const [dislike, setDislike] = useState({
        id: null,
        liked: false,
        postId: postId
    })

    //getting like, dislike and comment counts
    useEffect(() => {
        axios.get(`${Rest}/post/${postId}/vote`, { headers: JWTHeader() })
            .then(response => {
                setLikeCount(response.data.likeCount)
                setDislikeCount(response.data.dislikeCount)
                setCommentCount(response.data.commentCount)
            })
    },[])


    //getting like for specifci user
    useEffect(() => {
        axios.get(`${Rest}/post/${postId}/user/like`, { headers: JWTHeader() })
            .then(response => {
                if((response.data.liked !== undefined)) {
                    setLike({...like, liked: response.data.liked})
                }
            })
    },[])


    //getting like for specifci user
    useEffect(() => {
        axios.get(`${Rest}/post/${postId}/user/dislike`, { headers: JWTHeader() })
            .then(response => {
                if((response.data.liked !== undefined)) {
                    setDislike({...dislike, liked: true})
                }

            })
    },[postId])

    //rest request for like dislike logic
    const postLike = () => {
        setLikeCount(likeCount + 1)
        setLike({...like, liked: true})
        axios.post(`${Rest}/post/${postId}/user/vote`, {liked: true}, { headers: JWTHeader() })
            .catch(err => console.log(err))
    }
    const deleteLike = () => {
        setLikeCount(likeCount - 1)
        setLike({...like, liked: false})
        axios.delete(`${Rest}/post/${postId}/user/like`, { headers: JWTHeader() })
            .catch(error => console.log(error))
    }
    const postDislike = () => {
        setDislikeCount(dislikeCount + 1)
        setDislike({...dislike, liked: true})
        axios.post(`${Rest}/post/${postId}/user/vote`, {liked: false}, { headers: JWTHeader() })
            .catch(err => console.log(err))
    }
    const deleteDislike = () => {
        setDislikeCount(dislikeCount - 1)
        setDislike({...dislike, liked: false})
        axios.delete(`${Rest}/post/${postId}/user/dislike`, { headers: JWTHeader() })
            .catch(error => console.log(error))
    }


    const changeVote = () => {
        if(!like.liked) {
            setDislikeCount(dislikeCount - 1)
            setDislike({...dislike, liked: false})
            axios.put(`${Rest}/post/${postId}/user/vote`, {liked: true}, { headers: JWTHeader() })
                .catch(error => console.log(error))
            setLikeCount(likeCount + 1)
            setLike({...like, liked: true})
        }
        else{
            setLikeCount(likeCount - 1)
            setLike({...like, liked: false})
            axios.put(`${Rest}/post/${postId}/user/vote`, {liked: false}, { headers: JWTHeader() })
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
        <div className=" mx-auto justify-content-between mb-2">
            {likeCount} <button id={ like.liked ? 'react-button-clicked' : 'react-button'} onClick={() => clickLike()} >
            <FaThumbsUp/>
        </button>
            {dislikeCount} <button id={ dislike.liked ? 'react-button-clicked' : 'react-button' } onClick={() => clickDislike()} >
            <FaThumbsDown />
        </button>
            {commentCount} <bvutton id="react-button" onClick={() => toggleCommentBox()}>
            <FaCommentDots />
        </bvutton>
            0 <button id="react-button">
            <FaShare />
        </button>
        </div>
            {showComments &&  <PostComment
                commentCount={commentCount}
                setCommentCount={setCommentCount}
            />  }

            </>
    )
}

export default PostReact