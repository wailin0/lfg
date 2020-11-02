import axios from 'axios'
import Rest from "../../components/Rest";
import JWTHeader from "../../components/auth/JWTHeader";

const baseUrl = Rest

const getAllPost = async () => {
    const response = await axios.get(baseUrl+'/all/post')
    return response.data
}

const getPostFromGroup = async (groupId) => {
    const response = await axios.get(`${baseUrl}/group/${groupId}/post`)
    return response.data
}

const createNewPost = async (groupId, post) => {
    const response = await axios.post(`${baseUrl}/group/${groupId}/post`, post, {headers: JWTHeader()})
    return response.data
}

const updatePost = async (post) => {
    const response = await axios.put(`${baseUrl}/post/${post.postId}`, post, {headers: JWTHeader()})
    return response.data
}

const deletePost = async (postId) => {
    const response = await axios.delete(`${baseUrl}/post/${postId}`, {headers: JWTHeader()})
    return response.data
}

export default {
    getAllPost,
    getPostFromGroup,
    createNewPost,
    updatePost,
    deletePost
}