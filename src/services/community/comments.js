import axios from 'axios'
import Rest from "../../components/Rest";
import JWTHeader from "../../components/auth/JWTHeader";

const baseUrl = Rest


const getCommentFromPost = async (postId) => {
    const response = await axios.get(`${baseUrl}/post/${postId}/comment`)
    return response.data
}

const createNewComment = async (postId, comment) => {
    const response = await axios.post(`${baseUrl}/post/${postId}/comment`, comment, {headers: JWTHeader()})
    return response.data
}

const updateComment = async (comment) => {
    const response = await axios.put(`${baseUrl}/comment/${comment.id}`, comment, {headers: JWTHeader()})
    return response.data
}

const deleteComment = async (commentId) => {
    const response = await axios.delete(`${baseUrl}/comment/${commentId}`, {headers: JWTHeader()})
    return response.data
}

export default {
    getCommentFromPost,
    createNewComment,
    updateComment,
    deleteComment
}