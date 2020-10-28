import axios from 'axios'
import Rest from "../../components/Rest";
import JWTHeader from "../../components/auth/JWTHeader";

const baseUrl = Rest


const getAuthedUser = async () => {
    const response = await axios.get(`${baseUrl}/user`, {headers: JWTHeader()})
    return response.data
}

const getUser = async (userId) => {
    const response = await axios.get(`${baseUrl}/user/${userId}`, {headers: JWTHeader()})
    return response.data
}

const createUser = async (user) => {
    const response = await axios.post(`${baseUrl}/all/user`, user, {headers: JWTHeader()})
    return response.data
}

const updateUser = async (user) => {
    const response = await axios.put(`${baseUrl}/user`, user, {headers: JWTHeader()})
    return response.data
}

const deleteUser = async () => {
    const response = await axios.delete(`${baseUrl}/user`, {headers: JWTHeader()})
    return response.data
}

export default {
    getAuthedUser,
    getUser,
    createUser,
    updateUser,
    deleteUser
}