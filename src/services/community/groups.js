import axios from 'axios'
import Rest from "../../components/Rest";
import JWTHeader from "../../components/auth/JWTHeader";

const baseUrl = Rest


const getUserGroup = async (postId) => {
    const response = await axios.get(`${baseUrl}/user/group/user`)
    return response.data
}

const createNewGroup = async (group) => {
    const response = await axios.post(`${baseUrl}/group`, group, {headers: JWTHeader()})
    return response.data
}

const updateGroup = async (group) => {
    const response = await axios.put(`${baseUrl}/group/${group.id}`, group, {headers: JWTHeader()})
    return response.data
}

const deleteGroup = async (groupId) => {
    const response = await axios.delete(`${baseUrl}/group/${groupId}`, {headers: JWTHeader()})
    return response.data
}

export default {
    getUserGroup,
    createNewGroup,
    updateGroup,
    deleteGroup
}